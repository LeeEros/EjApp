export class listaProjetoDto {
  constructor(
    readonly id: string,
    readonly dataInicio: string,
    readonly dataPrevisao: string,
    readonly dataFim: string,
    readonly nomeProjeto: string,
    readonly status: string,
  ) {}
}
