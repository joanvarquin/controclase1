import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoactividadService } from './tipoactividad.service';
import { CreateTipoactividadDto } from './dto/create-tipoactividad.dto';
import { UpdateTipoactividadDto } from './dto/update-tipoactividad.dto';

@Controller('tipoactividad')
export class TipoactividadController {
  constructor(private readonly tipoactividadService: TipoactividadService) {}

  @Post()
  create(@Body() createTipoactividadDto: CreateTipoactividadDto) {
    return this.tipoactividadService.create(createTipoactividadDto);
  }

  @Get()
  findAll() {
    return this.tipoactividadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoactividadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoactividadDto: UpdateTipoactividadDto) {
    return this.tipoactividadService.update(+id, updateTipoactividadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoactividadService.remove(+id);
  }
}
