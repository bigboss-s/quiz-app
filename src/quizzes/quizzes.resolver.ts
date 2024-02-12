import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuizzesService } from './quizzes.service';
import { Quiz } from './quiz.entity';
import { CreateQuizInput } from './dto/create-quiz.input';
import { ShowQuizDTO } from './dto/show-quiz.type';
import { QuestionType } from 'src/questions/questions.entity';

@Resolver(of => Quiz)
export class QuizzesResolver {
    constructor(private quizzesService: QuizzesService) {}

    @Query(returns => [Quiz])
    async getQuizzes(): Promise<Quiz []> {
        return await this.quizzesService.findAll();
    }

    @Mutation(returns => Quiz)
    async createQuiz(@Args('createQuizInput') createQuizInput: CreateQuizInput): Promise<Quiz> {
        return await this.quizzesService.createQuiz(createQuizInput);
    }

    @Query(returns => Quiz)
    async getFullQuiz(@Args('id', {type: () => Int}) id: number): Promise<Quiz> {
        return await this.quizzesService.findOne(id);
    }

    @Query(returns => ShowQuizDTO)
    async showQuiz(@Args('id', {type: () => Int}) id: number): Promise<ShowQuizDTO> {
        const quiz = await this.quizzesService.findOne(id);
        const showQuiz = {
            name: quiz.name,
            description: quiz.description,
            questions: quiz.questions.map(question => {
                if (question.type !== QuestionType.OPEN_ANSWER){
                    return {
                        questionString: question.questionString,
                        type: question.type,
                        answers: question.answers.map(answer => ({
                            answerString: answer.answerString
                        })),
                    }
                } else {
                    return {
                        questionString: question.questionString,
                        type: question.type
                    }
                }
            })
        }
        return showQuiz;
    }
}
