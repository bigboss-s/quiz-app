import { Test, TestingModule } from '@nestjs/testing';
import { SingleQuestionsService } from './single-questions.service';

describe('SingleQuestionsService', () => {
  let service: SingleQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SingleQuestionsService],
    }).compile();

    service = module.get<SingleQuestionsService>(SingleQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
