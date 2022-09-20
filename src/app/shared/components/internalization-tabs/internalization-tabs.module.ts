import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InternalizationTabsComponent } from './internalization-tabs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InternalizationTabsComponent],
  exports: [InternalizationTabsComponent],
})
export class InternalizationTabsModule {}
