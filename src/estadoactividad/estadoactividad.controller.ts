import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoactividadService } from './estadoactividad.service';
import { CreateEstadoactividadDto } from './dto/create-estadoactividad.dto';
import { UpdateEstadoactividadDto } from './dto/update-estadoactividad.dto';

@Controller('estadoactividad')
export class EstadoactividadController {
  constructor(private readonly estadoactividadService: EstadoactividadService) {}

  @Post()
  create(@Body() createEstadoactividadDto: CreateEstadoactividadDto) {
    return this.estadoactividadService.create(createEstadoactividadDto);
  }

  @Get()
  findAll() {
    return this.estadoactividadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoactividadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoactividadDto: UpdateEstadoactividadDto) {
    return this.estadoactividadService.update(+id, updateEstadoactividadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoactividadService.remove(+id);
  }
}
