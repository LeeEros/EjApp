import { PartialType } from '@nestjs/mapped-types';
import { CreateDiretorEjDto } from './create-diretor-ej.dto';

export class UpdateDiretorEjDto extends PartialType(CreateDiretorEjDto) {}
