import { Module } from '@nestjs/common';
import { EjService } from './service/ej.service';
import { EjController } from './controller/ej.controller';

@Module({
  controllers: [EjController],
  providers: [EjService],
})
export class EjModule {}
