import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocentetutorService } from './docentetutor.service';
import { CreateDocentetutorDto } from './dto/create-docentetutor.dto';
import { UpdateDocentetutorDto } from './dto/update-docentetutor.dto';

@Controller('docentetutor')
export class DocentetutorController {
  constructor(private readonly docentetutorService: DocentetutorService) {}

  @Post()
  create(@Body() createDocentetutorDto: CreateDocentetutorDto) {
    return this.docentetutorService.create(createDocentetutorDto);
  }

  @Get()
  findAll() {
    return this.docentetutorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docentetutorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocentetutorDto: UpdateDocentetutorDto) {
    return this.docentetutorService.update(+id, updateDocentetutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docentetutorService.remove(+id);
  }
}
