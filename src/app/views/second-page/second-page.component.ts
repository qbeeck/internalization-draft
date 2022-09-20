import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
})
export class SecondPageComponent {
  constructor(private _fb: FormBuilder) {}

  show = true;

  form = this._fb.group({
    displayName: this._fb.group({
      en: 'en label',
      fr: 'fr label',
      de: 'de label',
      dk: 'dk label',
      he: 'he label',
    }),
    items: this._fb.array([
      this._fb.group({
        name: this._fb.group({
          en: 'item en label name',
          fr: 'item fr label name',
          de: 'item de label name',
          dk: 'item dk label name',
          he: 'item he label name',
        }),
        description: this._fb.group({
          en: 'item en label description',
          fr: 'item fr label description',
          de: 'item de label description',
          dk: 'item dk label description',
          he: 'item he label description',
        }),
      }),
    ]),
  });
}
