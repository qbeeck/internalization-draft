import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Input() form: FormGroup;

  get displayName() {
    return this.form.get('displayName') as FormGroup;
  }
}
