import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Pessoa } from 'src/pessoa/entities/pessoa.entity';

export class CreateClienteDto extends Pessoa {
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
  @IsString()
  contratoAtivo: string;
}
