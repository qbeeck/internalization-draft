import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/first-page/first-page.module').then(
        (m) => m.FirstPageModule
      ),
  },
  {
    path: 'second-page',
    loadChildren: () =>
      import('./views/second-page/second-page.module').then(
        (m) => m.SecondPageModule
      ),
  },
  {
    path: 'third-page',
    loadChildren: () =>
      import('./views/third-page/third-page.module').then(
        (m) => m.ThirdPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
