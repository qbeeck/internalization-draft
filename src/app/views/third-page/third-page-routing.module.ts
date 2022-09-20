import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThirdPageComponent } from './third-page.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdPageRoutingModule {}
