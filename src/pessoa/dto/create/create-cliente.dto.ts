import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'CNPJ não pode ser vazio' })
  @IsString()
  CNPJ: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'telefone não pode ser vazio' })
  @IsString()
  telefone: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'contrato não pode ser vazio' })
  @IsBoolean()
  contratoAtivo: boolean;
}
