export class listaClienteDto {
  constructor(
    readonly CNPJ: string,
    readonly telefone: string,
    readonly contratoAtivo: string,
  ) {}
}
