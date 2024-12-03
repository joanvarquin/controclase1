import { Test, TestingModule } from '@nestjs/testing';
import { DocenteasesorController } from './docenteasesor.controller';
import { docenteasesorservice } from './docenteasesor.service';

describe('DocenteasesorController', () => {
  let controller: DocenteasesorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocenteasesorController],
      providers: [docenteasesorservice],
    }).compile();

    controller = module.get<DocenteasesorController>(DocenteasesorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
