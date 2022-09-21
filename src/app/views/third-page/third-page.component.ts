import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { internalizationValidator } from '../../shared/helpers';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdPageComponent {
  show = true;
  form: FormGroup;

  errors$: Observable<any>;

  constructor(private _fb: FormBuilder) {
    this.form = this._form;

    this.errors$ = this.form.valueChanges.pipe(
      startWith(this.form),
      map(() => this._getFormErrors(this.form)),
      map((formErrors) => this._flatObject(formErrors))
    );
  }

  showForm() {
    console.log(this.form);
  }

  private get _form() {
    return this._fb.group({
      displayName: this._fb.group(
        {
          en: 'en label',
          fr: 'fr label',
          de: 'de label',
          dk: 'dk label',
          he: 'he label',
        },
        {
          validators: [internalizationValidator],
        }
      ),
      items: this._fb.array([
        this._fb.group({
          name: this._fb.group(
            {
              en: 'item en label name',
              fr: 'item fr label name',
              de: 'item de label name',
              dk: 'item dk label name',
              he: 'item he label name',
            },
            {
              validators: [internalizationValidator],
            }
          ),
          description: this._fb.group(
            {
              en: 'item en label description',
              fr: 'item fr label description',
              de: 'item de label description',
              dk: 'item dk label description',
              he: 'item he label description',
            },
            {
              validators: [internalizationValidator],
            }
          ),
        }),
      ]),
    });
  }

  private _getFormErrors(form: AbstractControl) {
    if (form instanceof FormControl) {
      // Return FormControl errors or null
      return form.errors ?? null;
    }

    if (form instanceof FormGroup || form instanceof FormArray) {
      const formErrors = {};

      Object.keys(form.controls).forEach((key) => {
        // Recursive call of the FormGroup fields
        const error = this._getFormErrors(form.get(key));
        if (error !== null) {
          // Only add error if not null
          formErrors[key] = error;
        }
      });
      // Return FormGroup errors or null
      return Object.keys(formErrors).length > 0 ? formErrors : null;
    }
  }

  private _flatObject(obj: Object) {
    return Object.keys(obj || {}).reduce((acc, cur) => {
      if (typeof obj[cur] === 'object') {
        acc = { ...acc, ...this._flatObject(obj[cur]) };
      } else {
        acc[cur] = obj[cur];
      }

      return acc;
    }, {});
  }
}
