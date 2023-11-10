import { Module } from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';
import { ClienteController } from '../controller/cliente.controller';
import { ClienteRepository } from '../repository/cliente.repository';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository],
})
export class ClienteModule {}
