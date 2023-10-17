import { PartialType } from '@nestjs/mapped-types';
import { CreateMembroEjDto } from './create-membro-ej.dto';

export class UpdateMembroEjDto extends PartialType(CreateMembroEjDto) {}
