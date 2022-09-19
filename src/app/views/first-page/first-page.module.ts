import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FirstPageComponent } from './first-page.component';
import { FormComponent } from './components';
import { SharedModule } from '../../shared/shared.module';
import { FirstPageRoutingModule } from './first-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FirstPageRoutingModule,
    SharedModule,
  ],
  declarations: [FirstPageComponent, FormComponent],
})
export class FirstPageModule {}
