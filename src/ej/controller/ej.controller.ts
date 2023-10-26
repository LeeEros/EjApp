import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { EjService } from '../service/ej.service';
import { CreateEjDto } from '../dto/create-ej.dto';
import { UpdateEjDto } from '../dto/update-ej.dto';

@Controller('ej')
export class EjController {
  constructor(private readonly ejService: EjService) {}

  @Post()
  async create(@Body() createEjDto: CreateEjDto) {
    try {
      return this.ejService.create(createEjDto);
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Get()
  async findAll() {
    return this.ejService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.ejService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjDto: UpdateEjDto) {
    return this.ejService.update(+id, updateEjDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejService.remove(+id);
  }
}
