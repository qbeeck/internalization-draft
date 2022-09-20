import { NgModule } from '@angular/core';

import { InternalizationPipeModule } from './pipes';
import { InternalizationTabsModule } from './components';

@NgModule({
  imports: [InternalizationPipeModule, InternalizationTabsModule],
  exports: [InternalizationPipeModule, InternalizationTabsModule],
})
export class SharedModule {}
