import { Test, TestingModule } from '@nestjs/testing';
import { OpenQuestionsService } from './open-questions.service';

describe('OpenQuestionsService', () => {
  let service: OpenQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenQuestionsService],
    }).compile();

    service = module.get<OpenQuestionsService>(OpenQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
