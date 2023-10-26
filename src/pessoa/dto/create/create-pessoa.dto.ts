import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreatePessoaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

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
  @IsDate()
  dataNascimento: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsStrongPassword()
  senha: String;
}
