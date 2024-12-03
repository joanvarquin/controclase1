import { Test, TestingModule } from '@nestjs/testing';
import { EstadoactividadService } from './estadoactividad.service';

describe('EstadoactividadService', () => {
  let service: EstadoactividadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoactividadService],
    }).compile();

    service = module.get<EstadoactividadService>(EstadoactividadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
