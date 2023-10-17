import { Module } from '@nestjs/common';
import { EjModule } from './ej/ej.module';
import { ClienteModule } from './pessoa/module/cliente.module';
import { DiretorEjModule } from './pessoa/module/diretor-ej.module';
import { MembroEjModule } from './pessoa/module/membro-ej.module';
import { PessoaModule } from './pessoa/module/pessoa.module';
import { ProjetoModule } from './projeto/projeto.module';

@Module({
  imports: [
    PessoaModule,
    ClienteModule,
    DiretorEjModule,
    MembroEjModule,
    EjModule,
    ProjetoModule,
  ],
})
export class EmpresaJuniorModule {}
