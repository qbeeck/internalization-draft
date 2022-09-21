import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-internalization-tabs-updated',
  templateUrl: './internalization-tabs-updated.component.html',
  styleUrls: ['./internalization-tabs-updated.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternalizationTabsUpdatedComponent implements OnDestroy {
  @Input() form: FormGroup;
  languages = ['en', 'fr', 'de', 'dk', 'he'];

  currentTab$: Observable<string>;

  errors: any = {};

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.currentTab$ = this._currentTab;

    // If there is no lang query param, then
    // navigate by default
    this._route.queryParams
      .pipe(
        first(),
        tap(
          (queryParams) =>
            queryParams.lang || this._navigateByLangQueryParam('en')
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    // remove lang query param from url
    this._navigateByLangQueryParam(null);
  }

  changeLanguage(lang: string) {
    // navigate to selected language
    this._navigateByLangQueryParam(lang);
  }

  private _navigateByLangQueryParam(lang: string | null) {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { lang },
      queryParamsHandling: 'merge',
    });
  }

  private get _currentTab() {
    return this._route.queryParams.pipe(map((queryParams) => queryParams.lang));
  }

  private _getFormErrors(form: AbstractControl) {
    if (form instanceof FormControl) {
      // Return FormControl errors or null
      return form.errors ?? null;
    }
    if (form instanceof FormGroup || form instanceof FormArray) {
      const groupErrors = form.errors;
      // Form group can contain errors itself, in that case add'em
      const formErrors = groupErrors ? { groupErrors } : {};
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
}
