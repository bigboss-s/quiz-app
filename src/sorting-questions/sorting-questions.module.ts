import { Module } from '@nestjs/common';
import { SortingQuestionsService } from './sorting-questions.service';
import { SortingQuestionsResolver } from './sorting-questions.resolver';

@Module({
  providers: [SortingQuestionsService, SortingQuestionsResolver]
})
export class SortingQuestionsModule {}
