import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPageComponent {
  show = true;

  form = new FormGroup({
    name: new FormControl('name'),
    displayName: new FormGroup({
      en: new FormControl('en label'),
      fr: new FormControl('fr label'),
      de: new FormControl('de label'),
      dk: new FormControl('dk label'),
      he: new FormControl('he label'),
    }),
    price: new FormControl(30),
  });
}
