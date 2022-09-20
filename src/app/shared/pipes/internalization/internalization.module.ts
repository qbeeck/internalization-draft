import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalizationPipe } from './internalization.pipe';

@NgModule({
  declarations: [InternalizationPipe],
  exports: [InternalizationPipe],
})
export class InternalizationPipeModule {}
