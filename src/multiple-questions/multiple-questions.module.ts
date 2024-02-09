import { Module } from '@nestjs/common';
import { MultipleQuestionsService } from './multiple-questions.service';
import { MultipleQuestionsResolver } from './multiple-questions.resolver';

@Module({
  providers: [MultipleQuestionsService, MultipleQuestionsResolver]
})
export class MultipleQuestionsModule {}
