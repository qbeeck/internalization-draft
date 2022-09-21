import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

export const formNestedErrors = (form: AbstractControl) => {
  if (form instanceof FormControl) {
    // Return FormControl errors or null
    return form.errors ?? null;
  }

  if (form instanceof FormGroup || form instanceof FormArray) {
    const formErrors = {};

    Object.keys(form.controls).forEach((key) => {
      // Recursive call of the FormGroup fields
      const error = formNestedErrors(form.get(key));

      if (error !== null) {
        // Only add error if not null
        formErrors[key] = error;
      }
    });
    // Return FormGroup errors or null
    return Object.keys(formErrors).length > 0 ? formErrors : null;
  }
};
