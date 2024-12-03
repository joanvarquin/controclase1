import { Module } from '@nestjs/common';
import { TipoactividadService } from './tipoactividad.service';
import { TipoactividadController } from './tipoactividad.controller';

@Module({
  controllers: [TipoactividadController],
  providers: [TipoactividadService],
})
export class TipoactividadModule {}
