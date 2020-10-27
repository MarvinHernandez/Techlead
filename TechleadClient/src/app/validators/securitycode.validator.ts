import { AbstractControl } from '@angular/forms';

export function ValidateCardSecurityCode(control: AbstractControl): { invalidCardCode: boolean } {
  const CARD_NUM_REGEXP = /^[0-9]{3}$/;
  return !CARD_NUM_REGEXP.test(control.value) ? {invalidCardCode: true} : null;
} // ValidateCardSecurityCode
