import { Module } from '@nestjs/common';
import { EstadoactividadService } from './estadoactividad.service';
import { EstadoactividadController } from './estadoactividad.controller';

@Module({
  controllers: [EstadoactividadController],
  providers: [EstadoactividadService],
})
export class EstadoactividadModule {}
