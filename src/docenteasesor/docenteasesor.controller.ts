import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { docenteasesorservice } from './docenteasesor.service';
import { CreateDocenteasesorDto } from './dto/create-docenteasesor.dto';
import { UpdateDocenteasesorDto } from './dto/update-docenteasesor.dto';

@Controller('docenteasesor')
export class DocenteasesorController {
  constructor(private readonly docenteasesorService: docenteasesorservice) {}

  @Post()
  create(@Body() createDocenteasesorDto: CreateDocenteasesorDto) {
    return this.docenteasesorService.create(createDocenteasesorDto);
  }

  @Get()
  findAll() {
    return this.docenteasesorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docenteasesorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocenteasesorDto: UpdateDocenteasesorDto) {
    return this.docenteasesorService.update(+id, updateDocenteasesorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docenteasesorService.remove(+id);
  }
}
