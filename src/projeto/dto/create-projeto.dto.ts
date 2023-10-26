import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateProjetoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Data não pode ser vazia' })
  @IsDate()
  dataInicio: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'Data não pode ser vazia' })
  @IsDate()
  dataPrevisao: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'Data não pode ser vazia' })
  @IsDate()
  dataFim: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'Projeto não pode ser vazia' })
  @IsString()
  nomeProjeto: String;

  @ApiProperty()
  @IsNotEmpty({ message: 'Status não pode ser vazia' })
  @IsString()
  status: String;
}
