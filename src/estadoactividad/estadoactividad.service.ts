import { Injectable } from '@nestjs/common';
import { CreateEstadoactividadDto } from './dto/create-estadoactividad.dto';
import { UpdateEstadoactividadDto } from './dto/update-estadoactividad.dto';

@Injectable()
export class EstadoactividadService {
  create(createEstadoactividadDto: CreateEstadoactividadDto) {
    return 'This action adds a new estadoactividad';
  }

  findAll() {
    return `This action returns all estadoactividad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoactividad`;
  }

  update(id: number, updateEstadoactividadDto: UpdateEstadoactividadDto) {
    return `This action updates a #${id} estadoactividad`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoactividad`;
  }
}
