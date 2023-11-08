import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateProjetoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Data não pode ser vazia' })
  @IsString()
  dataInicio: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Data não pode ser vazia' })
  @IsString()
  dataPrevisao: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Data não pode ser vazia' })
  @IsString()
  dataFim: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Projeto não pode ser vazia' })
  @IsString()
  nomeProjeto: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Status não pode ser vazia' })
  @IsString()
  status: string;
}
