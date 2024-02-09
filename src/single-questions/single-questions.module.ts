import { Module } from '@nestjs/common';
import { SingleQuestionsService } from './single-questions.service';
import { SingleQuestionsResolver } from './single-questions.resolver';

@Module({
  providers: [SingleQuestionsService, SingleQuestionsResolver]
})
export class SingleQuestionsModule {}
