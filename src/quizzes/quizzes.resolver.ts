import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuizzesService } from './quizzes.service';
import { Quiz } from './quiz.entity';
import { createQuizInput } from './dto/create-quiz.input';

@Resolver(of => Quiz)
export class QuizzesResolver {
    constructor(private quizzesService: QuizzesService) {}

    @Query(returns => [Quiz])
    quizzes(): Promise<Quiz []> {
        return this.quizzesService.findAllAsync();
    }

    @Mutation(returns => Quiz)
    createQuiz(@Args('createQuizInput') createQuizInput: createQuizInput): Promise<Quiz> {
        return this.quizzesService.createQuizAsync(createQuizInput);
    }

    @Query(returns => Quiz)
    getQuiz(@Args('id', {type: () => Int}) id: number): Promise<Quiz> {
        return this.quizzesService.findOneAsync(id);
    }
}
