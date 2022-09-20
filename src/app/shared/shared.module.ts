import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalizationPipeModule } from './pipes';
import { InternalizationTabsModule } from './components';

@NgModule({
  imports: [InternalizationPipeModule, InternalizationTabsModule],
  exports: [InternalizationPipeModule, InternalizationTabsModule],
})
export class SharedModule {}
