import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components';
import { ThirdPageComponent } from './third-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ThirdPageRoutingModule } from './third-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ThirdPageRoutingModule,
    SharedModule,
  ],
  declarations: [ThirdPageComponent, FormComponent],
})
export class ThirdPageModule {}
