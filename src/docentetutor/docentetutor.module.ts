import { Module } from '@nestjs/common';
import { DocentetutorService } from './docentetutor.service';
import { DocentetutorController } from './docentetutor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docentetutor } from './entities/docentetutor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Docentetutor])],
  controllers: [DocentetutorController],
  providers: [DocentetutorService],
})
export class DocentetutorModule {}
