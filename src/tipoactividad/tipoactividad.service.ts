import { Injectable } from '@nestjs/common';
import { CreateTipoactividadDto } from './dto/create-tipoactividad.dto';
import { UpdateTipoactividadDto } from './dto/update-tipoactividad.dto';

@Injectable()
export class TipoactividadService {
  create(createTipoactividadDto: CreateTipoactividadDto) {
    return 'This action adds a new tipoactividad';
  }

  findAll() {
    return `This action returns all tipoactividad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoactividad`;
  }

  update(id: number, updateTipoactividadDto: UpdateTipoactividadDto) {
    return `This action updates a #${id} tipoactividad`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoactividad`;
  }
}
