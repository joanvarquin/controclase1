import { Test, TestingModule } from '@nestjs/testing';
import { TipoactividadService } from './tipoactividad.service';

describe('TipoactividadService', () => {
  let service: TipoactividadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoactividadService],
    }).compile();

    service = module.get<TipoactividadService>(TipoactividadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
