import { Test, TestingModule } from '@nestjs/testing';
import { EstadoactividadController } from './estadoactividad.controller';
import { EstadoactividadService } from './estadoactividad.service';

describe('EstadoactividadController', () => {
  let controller: EstadoactividadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoactividadController],
      providers: [EstadoactividadService],
    }).compile();

    controller = module.get<EstadoactividadController>(EstadoactividadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
