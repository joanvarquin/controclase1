import { Injectable } from '@nestjs/common';
import { CreateDocenteasesorDto } from './dto/create-docenteasesor.dto';
import { UpdateDocenteasesorDto } from './dto/update-docenteasesor.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { docenteasesor } from './entities/docenteasesor.entity';

@Injectable()
export class docenteasesorservice {
  constructor(
    @InjectRepository(docenteasesor)
    private docenteRepository: Repository<docenteasesor>,
  ){}
  async create(CreateDocenteasesorDto: CreateDocenteasesorDto) {
    return await this.docenteRepository.save(CreateDocenteasesorDto)
  }
  async findAll(){
    return await this.docenteRepository.find()
  }
  async findOne(id: number) {
    return await this.docenteRepository.findOneBy({ });
  }
  async update(id: number, UpdateDocenteasesorDto: UpdateDocenteasesorDto){
    const docente = await this.findOne(id);
    Object.assign(docente, UpdateDocenteasesorDto);
    if (docente){
      return this.docenteRepository.save(docente);
    }
  }
  async remove(id: number) {
    await this.docenteRepository.delete(id);
  }
}