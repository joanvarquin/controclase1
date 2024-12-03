import { Test, TestingModule } from '@nestjs/testing';
import { DocenteasesorService } from './docenteasesor.service';

describe('DocenteasesorService', () => {
  let service: DocenteasesorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocenteasesorService],
    }).compile();

    service = module.get<DocenteasesorService>(DocenteasesorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
