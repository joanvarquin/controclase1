import { Injectable } from '@nestjs/common';
import { CreateDocenteformacionDto } from './dto/create-docenteformacion.dto';
import { UpdateDocenteformacionDto } from './dto/update-docenteformacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docenteformacion } from './entities/docenteformacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocenteformacionService {
  constructor(
    @InjectRepository(Docenteformacion)
    private docenteRepository: Repository<Docenteformacion>,
  ) {}

  async create(createDocenteformacionDto: CreateDocenteformacionDto) {
   
    return await this.docenteRepository.save(createDocenteformacionDto)
   
  }

 async  findAll() {
     return await  this.docenteRepository.find()
  }

  async findOne(id: number) {
    return await this.docenteRepository.findOneBy({ id });
  }

  async update(id: number, updateDocenteformacionDto: UpdateDocenteformacionDto) {
    const docente = await this.findOne(id); 
    Object.assign(docente, updateDocenteformacionDto);
     if (docente)
   {
    return this.docenteRepository.save(docente);
   }

 

  }
  

 async remove(id: number) {
    await this.docenteRepository.delete(id);
  }
}
