import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { PessoaModule } from 'src/pessoa/module/pessoa.module';
import { EjModule } from 'src/ej/ej.module';
import { ProjetoModule } from 'src/projeto/projeto.module';

@Module({
  imports: [PessoaModule, EjModule, ProjetoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
