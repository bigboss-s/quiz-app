import { Test, TestingModule } from '@nestjs/testing';
import { SingleQuestionsResolver } from './single-questions.resolver';

describe('SingleQuestionsResolver', () => {
  let resolver: SingleQuestionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SingleQuestionsResolver],
    }).compile();

    resolver = module.get<SingleQuestionsResolver>(SingleQuestionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
