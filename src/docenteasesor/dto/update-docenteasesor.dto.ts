import { PartialType } from '@nestjs/mapped-types';
import { CreateDocenteasesorDto } from './create-docenteasesor.dto';

export class UpdateDocenteasesorDto extends PartialType(CreateDocenteasesorDto) {}
