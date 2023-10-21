import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreatePessoaDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  CPF: string;

  @IsNotEmpty()
  @IsString()
  nomeCompleto: string;

  @IsNotEmpty()
  @IsDate()
  dataNascimento: Date;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsStrongPassword()
  senha: String;
}
