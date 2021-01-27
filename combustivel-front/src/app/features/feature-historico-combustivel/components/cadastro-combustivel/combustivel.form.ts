import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { CombustivelInterface } from 'src/app/core/interfaces/combustivel.interface';

export class CombustivelForm extends FormGroup {
    private _errorMessages = {
      required: 'O campo %s é obrigatório.',
    };

    constructor() {
      super({
        id: new FormControl(null),
        combustivel: new FormControl(null, [Validators.required]),
        data: new FormControl(null, [Validators.required]),
        preco: new FormControl(null, [Validators.required])
      });
    }

    public get id(): AbstractControl {
      return this.get('id');
    }

    public get combustivel(): AbstractControl {
        return this.get('combustivel');
    }

    public get data(): AbstractControl {
        return this.get('data');
    }
    public get preco(): AbstractControl {
        return this.get('preco');
    }

    public markAllAsTouched(): void {
      Object.keys(this.controls).map((control) => this.get(control).markAsDirty());
    }

    public getFirstErrorFrom(controlName: string, label: string): string {
        return this._errorMessages[Object.keys(this.get(controlName).errors)[0]].replace('%s', label || controlName);
    }

    public getDadosForm(): any {
        this.deleteControlValuesNull();
        return this.value;
    }
    private deleteControlValuesNull(): void {
        for (const control in this.value) {
            if (this.value[control] === null || this.value[control] === '') {
                delete this.value[control];
            }
        }
    }

  public setValues(data: CombustivelInterface): void {
      this.id.setValue(data.id);
      this.combustivel.setValue(data.combustivel);
      this.data.setValue(data.data);
      this.preco.setValue(data.preco);
  }

  public getDadosEnvioCombustivel(): CombustivelInterface {
      return {
          id: this.id.value,
          combustivel: this.combustivel.value,
          data: this.data.value,
          preco: this.preco.value
      };
  }
}
