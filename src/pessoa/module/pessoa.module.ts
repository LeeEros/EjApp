import { Module } from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';
import { PessoaController } from '../controller/pessoa.controller';
import { MembroEjModule } from 'src/pessoa/module/membro-ej.module';

@Module({
  controllers: [PessoaController],
  providers: [PessoaService],
  imports: [MembroEjModule],
})
export class PessoaModule {}
