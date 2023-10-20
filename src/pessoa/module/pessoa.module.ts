import { Module } from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';
import { PessoaController } from '../controller/pessoa.controller';
import { MembroEjModule } from 'src/pessoa/module/membro-ej.module';
import { ClienteModule } from './cliente.module';
import { DiretorEjModule } from './diretor-ej.module';

@Module({
  controllers: [PessoaController],
  providers: [PessoaService],
  imports: [MembroEjModule, DiretorEjModule, ClienteModule],
})
export class PessoaModule {}
