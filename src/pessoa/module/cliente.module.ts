import { Module } from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';
import { ClienteController } from '../controller/cliente.controller';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
