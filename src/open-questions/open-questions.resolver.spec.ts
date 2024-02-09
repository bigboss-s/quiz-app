import { Test, TestingModule } from '@nestjs/testing';
import { OpenQuestionsResolver } from './open-questions.resolver';

describe('OpenQuestionsResolver', () => {
  let resolver: OpenQuestionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenQuestionsResolver],
    }).compile();

    resolver = module.get<OpenQuestionsResolver>(OpenQuestionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
