import { Test, TestingModule } from '@nestjs/testing';
import { DocentetutorService } from './docentetutor.service';

describe('DocentetutorService', () => {
  let service: DocentetutorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocentetutorService],
    }).compile();

    service = module.get<DocentetutorService>(DocentetutorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
