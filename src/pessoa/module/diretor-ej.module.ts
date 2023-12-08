import { Module } from '@nestjs/common';
import { DiretorEjController } from '../controller/diretor-ej.controller';
import { DiretorEjService } from '../service/diretor-ej.service';
import { DiretorRepository } from '../repository/diretor.repository';

@Module({
  controllers: [DiretorEjController],
  providers: [DiretorEjService, DiretorRepository],
})
export class DiretorEjModule {}
