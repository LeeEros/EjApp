import { Module } from '@nestjs/common';
import { ProjetoService } from '../service/projeto.service';
import { ProjetoController } from '../controller/projeto.controller';
import { ProjetoRepository } from '../repository/projeto.repository';

@Module({
  controllers: [ProjetoController],
  providers: [ProjetoService, ProjetoRepository],
})
export class ProjetoModule {}
