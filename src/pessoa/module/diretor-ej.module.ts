import { Module } from '@nestjs/common';
import { DiretorEjController } from '../controller/diretor-ej.controller';
import { DiretorEjService } from '../service/diretor-ej.service';

@Module({
  controllers: [DiretorEjController],
  providers: [DiretorEjService],
})
export class DiretorEjModule {}
