import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

import { IFormInternalizationErrors } from '../../shared/types';

import {
  flatNestedObject,
  formNestedErrors,
  internalizationValidator,
} from '../../shared/helpers';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdPageComponent {
  show = true;
  form: FormGroup;

  errors$: Observable<IFormInternalizationErrors>;

  constructor(private _fb: FormBuilder) {
    this.form = this._form;

    this.errors$ = this._errors;
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
          validators: [internalizationValidator()],
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
              validators: [internalizationValidator()],
            }
          ),
          description: this._fb.group(
            {
              en: 'item en label description',
              fr: 'item fr label description',
              de: 'item de label description',
              dk: 'item dk label description',
              he: 'item he label description',
            }
          ),
        }),
      ]),
    });
  }

  private get _errors() {
    return this.form.valueChanges.pipe(
      startWith(this.form),
      map(() => formNestedErrors(this.form)),
      map((formErrors) => flatNestedObject(formErrors))
    );
  }
}
