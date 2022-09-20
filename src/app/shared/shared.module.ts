import { NgModule } from '@angular/core';

import { InternalizationPipeModule } from './pipes';
import {
  InternalizationTabsModule,
  InternalizationTabsUpdatedModule,
} from './components';

@NgModule({
  imports: [
    InternalizationPipeModule,
    InternalizationTabsUpdatedModule,
    InternalizationTabsModule,
  ],
  exports: [
    InternalizationPipeModule,
    InternalizationTabsUpdatedModule,
    InternalizationTabsModule,
  ],
})
export class SharedModule {}
