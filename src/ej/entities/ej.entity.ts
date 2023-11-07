export class Ej {
  id: string;

  CNPJ: string;

  nome: string;

  [key: string]: any;

  constructor(data?: Partial<Ej>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
