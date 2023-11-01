export class listaMembroEjDto {
  constructor(
    readonly id: string,
    readonly CPF: string,
    readonly dataNascimento: string,
    readonly nomeCompleto: string,
    readonly email: string,
    readonly matriculaInstituicao: string,
    readonly dataFiliacao: string,
    readonly enderecoResidencial: string,
    readonly RG: string,
  ) {}
}
