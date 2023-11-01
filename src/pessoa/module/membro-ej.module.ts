import { Module } from '@nestjs/common';
import { MembroEjController } from '../controller/membro-ej.controller';
import { MembroEjRepository } from '../repository/membro-ej.repository';
import { MembroEjService } from '../service/membro-ej.service';
import { DiretorEjModule } from './diretor-ej.module';

@Module({
  controllers: [MembroEjController],
  providers: [MembroEjService, MembroEjRepository],
  imports: [DiretorEjModule],
})
export class MembroEjModule {}
