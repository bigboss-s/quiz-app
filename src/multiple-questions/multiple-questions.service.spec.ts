import { Test, TestingModule } from '@nestjs/testing';
import { MultipleQuestionsService } from './multiple-questions.service';

describe('MultipleQuestionsService', () => {
  let service: MultipleQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultipleQuestionsService],
    }).compile();

    service = module.get<MultipleQuestionsService>(MultipleQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
