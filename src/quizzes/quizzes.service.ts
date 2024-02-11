import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createQuizInput } from './dto/create-quiz.input';
import { QuestionsService } from 'src/questions/questions.service';
import { AnswersService } from 'src/answers/answers.service';
import { Question } from 'src/questions/questions.entity';
import { Answer } from 'src/answers/answer.entity';

@Injectable()
export class QuizzesService {
    constructor(
        @InjectRepository(Quiz) private quizzesRespository: Repository<Quiz>,
        @InjectRepository(Question) private questionsService: Repository<Question>,
        @InjectRepository(Answer) private answersService: Repository<Answer>
    ) {}

    async createQuiz(createQuizInput: createQuizInput): Promise<Quiz> {
        return await this.quizzesRespository.manager.transaction(async entityManager => {
            const quiz = entityManager.create(Quiz, {
              title: createQuizInput.name,
              description: createQuizInput.description
            });
            const savedQuiz = await entityManager.save(quiz);
      
            for (const questionInput of createQuizInput.questions) {
              const question = entityManager.create(Question, {
                quiz: savedQuiz,
                text: questionInput.questionString,
                type: questionInput.type
              });
              const savedQuestion = await entityManager.save(question);
      
              for (const answerInput of questionInput.answers) {
                const answer = entityManager.create(Answer, {
                  question: savedQuestion,
                  text: answerInput.answerString,
                  isCorrect: answerInput.isCorrect,
                });
                await entityManager.save(answer);
              }
            }
      
            return savedQuiz;
        });
    }

    async findAll(): Promise<Quiz[]> {
        return await this.quizzesRespository.find();
    }

    async findOne(id: number): Promise<Quiz> {
        return await this.quizzesRespository.findOneByOrFail({
            id: id
        });
    }
}
