import { AbstractControl } from '@angular/forms';


export function senhaValidator(c: AbstractControl): { [key: string]: any } | null {
    const charNumLengthRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return charNumLengthRegex.test(c.value) ? null : { validCharNumLength: true };
  }