import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateDiretorEjDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Setor não pode ser vazio' })
  @IsString()
  setor: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  @IsBoolean()
  conselheiroFederacao: string;
}
