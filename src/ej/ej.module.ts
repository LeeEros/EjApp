import { Module } from '@nestjs/common';
import { EjService } from './service/ej.service';
import { EjController } from './controller/ej.controller';
import { EjRepository } from './repository/ej.repository';

@Module({
  controllers: [EjController],
  providers: [EjService, EjRepository],
})
export class EjModule {}
