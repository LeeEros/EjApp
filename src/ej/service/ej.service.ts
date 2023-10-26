import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEjDto } from '../dto/create-ej.dto';
import { UpdateEjDto } from '../dto/update-ej.dto';
import { Ej } from '../entities/ej.entity';

@Injectable()
export class EjService {
  constructor(
    @InjectRepository(Ej)
    private readonly EJRepository: Repository<Ej>,
  ) {}

  async create(createEjDto: CreateEjDto): Promise<Ej> {
    return {
      ...createEjDto,
      id: 1,
    };
  }

  async findAll() {
    return await EjService;
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
