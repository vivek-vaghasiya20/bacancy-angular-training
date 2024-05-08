import { AbstractControl, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  const password = control.parent?.get('password')?.value;
  const confirmPassword = control.value;

  control.parent?.get('password')?.valueChanges.subscribe((newValue) => {
    if (newValue !== confirmPassword) {
      control.setErrors({ passwordMismatch: true });
    } else {
      control.setErrors(null);
    }
  });

  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  }
  return null;
};
