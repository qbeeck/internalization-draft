import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components';
import { SecondPageComponent } from './second-page.component';
import { SharedModule } from '../../shared/shared.module';
import { SecondPageRoutingModule } from './second-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SecondPageRoutingModule,
    SharedModule,
  ],
  declarations: [SecondPageComponent, FormComponent],
})
export class SecondPageModule {}
