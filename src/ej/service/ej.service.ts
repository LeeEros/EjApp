import { Injectable } from '@nestjs/common';
import { CreateEjDto } from '../dto/create-ej.dto';
import { UpdateEjDto } from '../dto/update-ej.dto';

@Injectable()
export class EjService {
  create(createEjDto: CreateEjDto) {
    return 'This action adds a new ej';
  }

  findAll() {
    return `This action returns all ej`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ej`;
  }

  update(id: number, updateEjDto: UpdateEjDto) {
    return `This action updates a #${id} ej`;
  }

  remove(id: number) {
    return `This action removes a #${id} ej`;
  }
}
