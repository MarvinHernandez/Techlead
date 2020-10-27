import { AbstractControl } from '@angular/forms';

export function ValidateCardNum(control: AbstractControl): { invalidCardNum: boolean } {
  const CARD_NUM_REGEXP = /^[0-9]{16}$/;
  return !CARD_NUM_REGEXP.test(control.value) ? {invalidCardNum: true} : null;
} // ValidateCardNum
