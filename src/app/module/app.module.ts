import { Module } from '@nestjs/common';
import { EmpresaJuniorModule } from 'src/empresa-junior.module';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';

@Module({
  imports: [EmpresaJuniorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
