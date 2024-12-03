import { Module } from '@nestjs/common';
import { docenteasesorservice } from './docenteasesor.service';
import { DocenteasesorController } from './docenteasesor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { docenteasesor } from './entities/docenteasesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([docenteasesor])],
  controllers: [DocenteasesorController],
  providers: [docenteasesorservice],
})
export class DocenteasesorModule {}