import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { MediaPrecoCombustivelInterface } from 'src/app/core/interfaces/media-preco-combustivel-interface';

export class MediaPrecoCombustivelForm extends FormGroup {
    private _errorMessages = {
      required: 'O campo %s é obrigatório.',
    };

    constructor() {
      super({
          municipio: new FormControl(null, [Validators.required]),
          preco: new FormControl(null),
      });
  }

    public get municipio(): AbstractControl {
        return this.get('municipio');
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

    public setValues(data: MediaPrecoCombustivelInterface): void {
      this.municipio.setValue(data.municipio);
      this.preco.setValue(data.preco);
    }
}
