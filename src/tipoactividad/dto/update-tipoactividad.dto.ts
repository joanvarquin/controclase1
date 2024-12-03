import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoactividadDto } from './create-tipoactividad.dto';

export class UpdateTipoactividadDto extends PartialType(CreateTipoactividadDto) {}
