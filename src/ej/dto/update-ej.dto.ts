import { PartialType } from '@nestjs/mapped-types';
import { CreateEjDto } from './create-ej.dto';

export class UpdateEjDto extends PartialType(CreateEjDto) {}
