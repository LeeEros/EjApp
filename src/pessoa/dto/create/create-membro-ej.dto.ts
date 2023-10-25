import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateMembroEjDto {
  @IsNotEmpty()
  @IsString()
  matriculaInstituicao: string;

  @IsNotEmpty()
  @IsDate()
  dataFiliacao: Date;

  @IsNotEmpty()
  @IsString()
  enderecoResidencial: string;
  RG: string;
}
