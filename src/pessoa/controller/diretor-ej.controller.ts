import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateDiretorEjDto } from '../dto/create/create-diretor-ej.dto';
import { UpdateDiretorEjDto } from '../dto/update/update-diretor-ej.dto';
import { DiretorEjService } from '../service/diretor-ej.service';

@Controller('diretor-ej')
export class DiretorEjController {
  constructor(private readonly diretorEjService: DiretorEjService) {}

  @Post()
  create(@Body() createDiretorEjDto: CreateDiretorEjDto) {
    return this.diretorEjService.create(createDiretorEjDto);
  }

  @Get()
  findAll() {
    return this.diretorEjService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diretorEjService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiretorEjDto: UpdateDiretorEjDto,
  ) {
    return this.diretorEjService.update(+id, updateDiretorEjDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diretorEjService.remove(+id);
  }
}
