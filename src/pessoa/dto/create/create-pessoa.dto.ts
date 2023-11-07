import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreatePessoaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  CPF: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nomeCompleto: string;

  @ApiProperty()
  @IsNotEmpty()
  dataNascimento: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsStrongPassword()
  senha: string;
}
