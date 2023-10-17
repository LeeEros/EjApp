import { PartialType } from '@nestjs/mapped-types';
import { CreateMembroEjDto } from '../create/create-membro-ej.dto';

export class UpdateMembroEjDto extends PartialType(CreateMembroEjDto) {}
