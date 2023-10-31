export class listaPessoaDto {
  constructor(
    readonly id: string,
    readonly CPF: string,
    readonly dataNascimento: string,
    readonly nomeCompleto: string,
    readonly email: string,
  ) {}
}
