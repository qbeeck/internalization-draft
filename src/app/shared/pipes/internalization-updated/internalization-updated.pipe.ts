import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { filter, map, Observable } from 'rxjs';

@Pipe({
  name: 'internalizationUpdated',
})
export class InternalizationUpdatedPipe implements PipeTransform {
  constructor(private _route: ActivatedRoute) {}

  transform(value: FormGroup): Observable<FormControl> {
    return this._route.queryParams.pipe(
      filter((queryParams) => queryParams.lang),
      map((queryParams) => value.controls[queryParams.lang] as FormControl)
    );
  }
}
