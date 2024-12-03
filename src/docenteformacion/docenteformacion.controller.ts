import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocenteformacionService } from './docenteformacion.service';
import { CreateDocenteformacionDto } from './dto/create-docenteformacion.dto';
import { UpdateDocenteformacionDto } from './dto/update-docenteformacion.dto';

@Controller('docenteformacion')
export class DocenteformacionController {
  constructor(private readonly docenteformacionService: DocenteformacionService) {}

  @Post()
 async create(@Body() createDocenteformacionDto: CreateDocenteformacionDto) {
 
    return this.docenteformacionService.create(createDocenteformacionDto);
  }

  @Get()
  findAll() {
    return this.docenteformacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docenteformacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocenteformacionDto: UpdateDocenteformacionDto) {
    return this.docenteformacionService.update(+id, updateDocenteformacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docenteformacionService.remove(+id);
  }
}
