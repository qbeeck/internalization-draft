import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { filter, map } from 'rxjs';

@Pipe({
  name: 'internalization',
})
export class InternalizationPipe implements PipeTransform {
  constructor(private _route: ActivatedRoute) {}

  transform(value: any): any {
    return this._route.queryParams.pipe(
      filter((queryParams) => queryParams.lang),
      map((queryParams) => value.controls[queryParams.lang] as FormControl)
    );
  }
}
