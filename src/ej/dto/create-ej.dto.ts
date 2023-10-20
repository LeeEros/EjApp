import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEjDto {
  @IsNotEmpty({ message: 'CNPJ não pode ser vazio' })
  @IsString()
  CNPJ: string;

  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsString()
  nome: string;
}
