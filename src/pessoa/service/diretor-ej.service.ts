import { Injectable } from '@nestjs/common';
import { CreateDiretorEjDto } from '../dto/create/create-diretor-ej.dto';
import { UpdateDiretorEjDto } from '../dto/update/update-diretor-ej.dto';

@Injectable()
export class DiretorEjService {
  create(createDiretorEjDto: CreateDiretorEjDto) {
    return 'This action adds a new diretorEj';
  }

  findAll() {
    return `This action returns all diretorEj`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diretorEj`;
  }

  update(id: number, updateDiretorEjDto: UpdateDiretorEjDto) {
    return `This action updates a #${id} diretorEj`;
  }

  remove(id: number) {
    return `This action removes a #${id} diretorEj`;
  }
}
