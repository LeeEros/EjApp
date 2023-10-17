import { Injectable } from '@nestjs/common';
import { CreateMembroEjDto } from '../dto/create-membro-ej.dto';
import { UpdateMembroEjDto } from '../dto/update-membro-ej.dto';

@Injectable()
export class MembroEjService {
  create(createMembroEjDto: CreateMembroEjDto) {
    return 'This action adds a new membroEj';
  }

  findAll() {
    return `This action returns all membroEj`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membroEj`;
  }

  update(id: number, updateMembroEjDto: UpdateMembroEjDto) {
    return `This action updates a #${id} membroEj`;
  }

  remove(id: number) {
    return `This action removes a #${id} membroEj`;
  }
}
