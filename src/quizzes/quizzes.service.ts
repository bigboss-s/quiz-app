import { BadRequestException, Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createQuizInput } from './dto/create-quiz.input';
import { QuestionsService } from 'src/questions/questions.service';
import { AnswersService } from 'src/answers/answers.service';
import { Question, QuestionType } from 'src/questions/questions.entity';
import { Answer } from 'src/answers/answer.entity';
import { createAnswerInput } from 'src/answers/dto/create-answer.input';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz) private quizzesRepository: Repository<Quiz>,
    @InjectRepository(Question) private questionsService: Repository<Question>,
    @InjectRepository(Answer) private answersService: Repository<Answer>
  ) { }

  async createQuiz(createQuizInput: createQuizInput): Promise<Quiz> {
    return await this.quizzesRepository.manager.transaction(async entityManager => {
      const quiz = await entityManager.save(Quiz, {
        name: createQuizInput.name,
        description: createQuizInput.description,
        questions: createQuizInput.questions.map(question => ({
          questionString: question.questionString,
          type: question.type,
          answers: question.answers.map(answer => ({
            answerString: answer.answerString,
            isCorrect: answer.isCorrect,
            order: answer.order
          }))
        }))
      });
  
      quiz.questions.forEach(question => {
        const correctAnswersCount = question.answers.filter(answer => answer.isCorrect).length;
        const correctNotNullAnswersCount = question.answers.filter(answer => answer.isCorrect !== null).length;
        const orderedAnswerCount = question.answers.filter(answer => answer.order !== null).length;

        if ([QuestionType.MULTIPLE_ANSWERS, QuestionType.SINGLE_ANSWER].includes(question.type) 
        && correctNotNullAnswersCount !== question.answers.length){
          throw new BadRequestException("All answers to single and multiple answer questions must be marked as correct or false");
        }
        if (question.type === QuestionType.MULTIPLE_ANSWERS && correctAnswersCount === 0) {
          throw new BadRequestException("Multiple answer questions must have at least one correct answer");
        }
        if (question.type === QuestionType.SINGLE_ANSWER && correctAnswersCount !== 1) {
          throw new BadRequestException("Single answer question must have exactly one correct answer.");
        }
        if (question.type === QuestionType.OPEN_ANSWER && question.answers.length !== 1){
          throw new BadRequestException("Plain text answer questions must have exactly one answer");
        }
        if (question.type === QuestionType.ORDERED_ANSWERS && orderedAnswerCount !== question.answers.length){
          throw new BadRequestException("All answers to a sorting question must be ordered");
        }
        if (question.type === QuestionType.ORDERED_ANSWERS && !this.checkAnswerOrder(question.answers)){
          throw new BadRequestException("Incorrect answer order. Ordering should start on 1 and increment by 1.");
        }


      });
  
      return quiz;
    });
  
  }

  private checkAnswerOrder(answers: createAnswerInput[]){
    const orders = answers.map(answer => answer.order);
    orders.sort();
    for (let i = 0; i < orders.length; i++) {
      if (orders[i] !== i + 1) {
        return false;
      }
    }
    return true;
  }

  async findAll(): Promise<Quiz[]> {
    return await this.quizzesRepository.find({
      relations: ['questions', 'questions.answers']
    });
  }

  async findOne(id: number): Promise<Quiz> {
    return await this.quizzesRepository.findOneByOrFail({
      id: id
    });
  }
}
