import { Module } from '@nestjs/common';
import { DocenteformacionService } from './docenteformacion.service';
import { DocenteformacionController } from './docenteformacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docenteformacion } from './entities/docenteformacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Docenteformacion])],
  controllers: [DocenteformacionController],
  providers: [DocenteformacionService],
})
export class DocenteformacionModule {}
