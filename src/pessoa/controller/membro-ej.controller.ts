import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateMembroEjDto } from '../dto/create/create-membro-ej.dto';
import { UpdateMembroEjDto } from '../dto/update/update-membro-ej.dto';
import { MembroEjService } from '../service/membro-ej.service';

@Controller('membro-ej')
export class MembroEjController {
  constructor(private readonly membroEjService: MembroEjService) {}

  @Post()
  create(@Body() createMembroEjDto: CreateMembroEjDto) {
    return this.membroEjService.create(createMembroEjDto);
  }

  @Get()
  findAll() {
    return this.membroEjService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membroEjService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMembroEjDto: UpdateMembroEjDto,
  ) {
    return this.membroEjService.update(+id, updateMembroEjDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membroEjService.remove(+id);
  }
}
