import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { PessoaModule } from 'src/pessoa/module/pessoa.module';
import { EjModule } from 'src/ej/ej.module';
import { ProjetoModule } from 'src/projeto/module/projeto.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from 'src/config/postrgres.config.service';

@Module({
  imports: [
    PessoaModule,
    EjModule,
    ProjetoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
