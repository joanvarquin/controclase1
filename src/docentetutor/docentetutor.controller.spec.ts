import { Test, TestingModule } from '@nestjs/testing';
import { DocentetutorController } from './docentetutor.controller';
import { DocentetutorService } from './docentetutor.service';

describe('DocentetutorController', () => {
  let controller: DocentetutorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocentetutorController],
      providers: [DocentetutorService],
    }).compile();

    controller = module.get<DocentetutorController>(DocentetutorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
