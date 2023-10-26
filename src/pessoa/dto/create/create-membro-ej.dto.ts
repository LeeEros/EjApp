import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateMembroEjDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  matriculaInstituicao: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  dataFiliacao: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  enderecoResidencial: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  RG: string;
}
