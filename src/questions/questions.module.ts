import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsResolver } from './questions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './questions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionsService, QuestionsResolver],
  exports: [QuestionsService, TypeOrmModule.forFeature([Question])]
})
export class QuestionsModule {}
