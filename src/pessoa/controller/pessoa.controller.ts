import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreatePessoaDto } from '../dto/create/create-pessoa.dto';
import { listaPessoaDto } from '../dto/list/ListaPessoa.dto';
import { UpdatePessoaDto } from '../dto/update/update-pessoa.dto';
import { Pessoa } from '../entities/pessoa.entity';
import { PessoaRepository } from '../repository/pessoa.repository';

@Controller('pessoa')
export class PessoaController {
  constructor(private pessoaRepository: PessoaRepository) {}

  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    try {
      const pessoaEntity = new Pessoa();
      pessoaEntity.id = uuid();
      pessoaEntity.CPF = createPessoaDto.CPF;
      pessoaEntity.nomeCompleto = createPessoaDto.nomeCompleto;
      pessoaEntity.dataNascimento = createPessoaDto.dataNascimento;
      pessoaEntity.email = createPessoaDto.email;
      pessoaEntity.senha = createPessoaDto.senha;

      this.pessoaRepository.salvar(pessoaEntity);

      return {
        pessoa: new listaPessoaDto(
          pessoaEntity.id,
          pessoaEntity.CPF,
          pessoaEntity.dataNascimento,
          pessoaEntity.email,
          pessoaEntity.nomeCompleto,
        ),
      };
    } catch {
      throw new NotFoundException();
    }
  }

  @Get()
  async findAll() {
    const pessoaSalvos = await this.pessoaRepository.listar();
    const pessoaLista = pessoaSalvos.map(
      (pessoa) =>
        new listaPessoaDto(
          pessoa.id,
          pessoa.CPF,
          pessoa.dataNascimento,
          pessoa.email,
          pessoa.nomeCompleto,
        ),
    );

    return pessoaLista;
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePessoaDto: UpdatePessoaDto,
  ) {
    try {
      const pessoaAtualizada = await this.pessoaRepository.atualiza(
        id,
        updatePessoaDto,
      );

      return {
        CPF: pessoaAtualizada.CPF,
        nomeCompleto: pessoaAtualizada.nomeCompleto,
        dataNascimento: pessoaAtualizada.dataNascimento,
        email: pessoaAtualizada.email,
      };
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaRepository.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaRepository.remove(+id);
  }*/
}
