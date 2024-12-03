import { Test, TestingModule } from '@nestjs/testing';
import { TipoactividadController } from './tipoactividad.controller';
import { TipoactividadService } from './tipoactividad.service';

describe('TipoactividadController', () => {
  let controller: TipoactividadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoactividadController],
      providers: [TipoactividadService],
    }).compile();

    controller = module.get<TipoactividadController>(TipoactividadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
