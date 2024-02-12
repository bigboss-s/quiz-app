import { Test, TestingModule } from '@nestjs/testing';
import { QuizzesResolver } from './quizzes.resolver';

describe('QuizzesResolver', () => {
  let resolver: QuizzesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizzesResolver],
    }).compile();

    resolver = module.get<QuizzesResolver>(QuizzesResolver);
  });
});
