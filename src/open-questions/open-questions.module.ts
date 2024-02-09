import { Module } from '@nestjs/common';
import { OpenQuestionsService } from './open-questions.service';
import { OpenQuestionsResolver } from './open-questions.resolver';

@Module({
  providers: [OpenQuestionsService, OpenQuestionsResolver]
})
export class OpenQuestionsModule {}
