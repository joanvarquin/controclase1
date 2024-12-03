import { Injectable } from '@nestjs/common';
import { CreateDocentetutorDto } from './dto/create-docentetutor.dto';
import { UpdateDocentetutorDto } from './dto/update-docentetutor.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Docentetutor } from './entities/docentetutor.entity';

@Injectable()
export class DocentetutorService {
  constructor(@InjectRepository(Docentetutor)
private docenteRepository: Repository<Docentetutor>,
){}
async create(CreateDocentetutorDto: CreateDocentetutorDto){
  return await this.docenteRepository.save(CreateDocentetutorDto)
}
async findAll(){
  return await this.docenteRepository.find()
}
async findOne(id:number) {
  return await this.docenteRepository.findOneBy({ id });
}
async update(id:number, UpdateDocentetutorDto: UpdateDocentetutorDto) {
  const docente = await this.findOne(id);
  Object.assign(docente, UpdateDocentetutorDto);
  if (docente){
    return this.docenteRepository.save(docente);
  }
}
async remove(id:number){
  await this.docenteRepository.delete(id);
}
}