import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuizzesService } from './quizzes.service';
import { Quiz } from './quiz.entity';
import { createQuizInput } from './dto/create-quiz.input';

@Resolver(of => Quiz)
export class QuizzesResolver {
    constructor(private quizzesService: QuizzesService) {}

    @Query(returns => [Quiz])
    async quizzes(): Promise<Quiz []> {
        return this.quizzesService.findAll();
    }

    @Mutation(returns => Quiz)
    async createQuiz(@Args('createQuizInput') createQuizInput: createQuizInput): Promise<Quiz> {
        return this.quizzesService.createQuiz(createQuizInput);
    }

    @Query(returns => Quiz)
    async getQuiz(@Args('id', {type: () => Int}) id: number): Promise<Quiz> {
        return this.quizzesService.findOne(id);
    }
}
