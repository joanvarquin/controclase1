import { PartialType } from '@nestjs/mapped-types';
import { CreateDocenteformacionDto } from './create-docenteformacion.dto';

export class UpdateDocenteformacionDto extends PartialType(CreateDocenteformacionDto) {
  
 
}
