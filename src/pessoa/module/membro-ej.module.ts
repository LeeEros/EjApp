import { Module } from '@nestjs/common';
import { MembroEjController } from '../controller/membro-ej.controller';
import { MembroEjService } from '../service/membro-ej.service';
import { DiretorEjModule } from './diretor-ej.module';

@Module({
  controllers: [MembroEjController],
  providers: [MembroEjService],
  imports: [DiretorEjModule],
})
export class MembroEjModule {}
