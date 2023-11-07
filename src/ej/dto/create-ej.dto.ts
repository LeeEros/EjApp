import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEjDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'CNPJ não pode ser vazio' })
  @IsString()
  CNPJ: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsString()
  nome: string;
}
