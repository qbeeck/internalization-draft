import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdPageComponent {
  show = true;
  form: FormGroup;

  localForm: any;

  constructor(private _fb: FormBuilder) {
    this.form = this._form;
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
          validators: [this._internalizationValidator],
        }
      ),
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

  test() {
    console.log(this.form === this.localForm);
  }

  private get _internalizationValidator() {
    return (group: FormGroup) => {
      if (!group.parent) return;

      let rootForm = this._rootForm(group);

      for (let key in group.controls) {
        !group.controls[key].value
          ? rootForm.setErrors({ [key]: true })
          : rootForm.setErrors({ [key]: false });
      }

      console.log(rootForm);

      this.localForm = rootForm;
    };
  }

  private _rootForm(form: AbstractControl) {
    if (!form.parent) return form;

    return this._rootForm(form.parent);
  }
}
