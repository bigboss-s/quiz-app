import { Test, TestingModule } from '@nestjs/testing';
import { SortingQuestionsResolver } from './sorting-questions.resolver';

describe('SortingQuestionsResolver', () => {
  let resolver: SortingQuestionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortingQuestionsResolver],
    }).compile();

    resolver = module.get<SortingQuestionsResolver>(SortingQuestionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
