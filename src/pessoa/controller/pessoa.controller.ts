import {
  Body,
  Controller,
  Delete,
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
  async create(@Body() pessoa: CreatePessoaDto) {
    try {
      const pessoaEntity = new Pessoa();
      pessoaEntity.id = uuid();
      pessoaEntity.CPF = pessoa.CPF;
      pessoaEntity.nomeCompleto = pessoa.nomeCompleto;
      pessoaEntity.dataNascimento = pessoa.dataNascimento;
      pessoaEntity.email = pessoa.email;
      pessoaEntity.senha = pessoa.senha;

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
    try {
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
    } catch {
      throw new NotFoundException();
    }
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
        messagem: 'Usuário atualizado com sucesso',
      };
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.pessoaRepository.findOneById(id);
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    try {
      const pessoaRepository = await this.pessoaRepository.remove(id);
      return {
        usuario: pessoaRepository,
        messagem: 'Usuário removido com sucesso',
      };
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }
}
