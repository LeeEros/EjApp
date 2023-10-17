import { Module } from '@nestjs/common';
import { ProjetoService } from './service/projeto.service';
import { ProjetoController } from './controller/projeto.controller';

@Module({
  controllers: [ProjetoController],
  providers: [ProjetoService],
})
export class ProjetoModule {}
