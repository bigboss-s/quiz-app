import { Test, TestingModule } from '@nestjs/testing';
import { SortingQuestionsService } from './sorting-questions.service';

describe('SortingQuestionsService', () => {
  let service: SortingQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortingQuestionsService],
    }).compile();

    service = module.get<SortingQuestionsService>(SortingQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
