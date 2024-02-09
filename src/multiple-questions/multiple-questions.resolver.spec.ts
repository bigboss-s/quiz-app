import { Test, TestingModule } from '@nestjs/testing';
import { MultipleQuestionsResolver } from './multiple-questions.resolver';

describe('MultipleQuestionsResolver', () => {
  let resolver: MultipleQuestionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultipleQuestionsResolver],
    }).compile();

    resolver = module.get<MultipleQuestionsResolver>(MultipleQuestionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
