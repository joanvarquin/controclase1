import { PartialType } from '@nestjs/mapped-types';
import { CreateDocentetutorDto } from './create-docentetutor.dto';

export class UpdateDocentetutorDto extends PartialType(CreateDocentetutorDto) {}
