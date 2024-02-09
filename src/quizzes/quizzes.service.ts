import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createQuizInput } from './dto/create-quiz.input';

@Injectable()
export class QuizzesService {
    constructor(@InjectRepository(Quiz) private quizzesRespository: Repository<Quiz>) {}

    async createQuizAsync(createQuizInput: createQuizInput): Promise<Quiz> {
        const newQuiz = this.quizzesRespository.create(createQuizInput);

        return await this.quizzesRespository.save(newQuiz);
    }

    async findAllAsync(): Promise<Quiz[]> {
        return await this.quizzesRespository.find();
    }

    async findOneAsync(id: number): Promise<Quiz> {
        return await this.quizzesRespository.findOneByOrFail({
            id: id
        });
    }
}
