import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-internalization-tabs',
  templateUrl: './internalization-tabs.component.html',
  styleUrls: ['./internalization-tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternalizationTabsComponent implements OnDestroy {
  languages = ['en', 'fr', 'de', 'dk', 'he'];

  currentTab$: Observable<string>;

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
}
