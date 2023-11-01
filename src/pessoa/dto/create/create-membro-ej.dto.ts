import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Pessoa } from 'src/pessoa/entities/pessoa.entity';

export class CreateMembroEjDto extends Pessoa {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  matriculaInstituicao: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dataFiliacao: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  enderecoResidencial: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  RG: string;
}
