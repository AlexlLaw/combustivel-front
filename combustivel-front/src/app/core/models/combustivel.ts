export class Combustivel {
  private _combustivel: string;
  private _data: string;
  private _preco: number;

  constructor({
    combustivel = null,
    data = null,
    preco = null
  }) {
    this.combustivel = combustivel;
    this.data = data;
    this.preco = preco;
  }

  public getValues(): any {
    return {
      combustivel: this.combustivel,
      data: this.data,
      preco: this.preco
    };
  }

  get combustivel(): string {
    return this._combustivel;
  }

  set combustivel(value: string) {
    this._combustivel = value;
  }

  get data(): string {
    return this._data;
  }

  set data(value: string) {
    this._data = value;
  }

  get preco(): number {
    return this._preco;
  }

  set preco(value: number) {
    this._preco = value;
  }

}
