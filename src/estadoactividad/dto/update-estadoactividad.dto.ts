import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoactividadDto } from './create-estadoactividad.dto';

export class UpdateEstadoactividadDto extends PartialType(CreateEstadoactividadDto) {}
