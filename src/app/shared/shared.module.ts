import { NgModule } from '@angular/core';

import {
  InternalizationPipeModule,
  InternalizationUpdatedModule,
} from './pipes';
import { InternalizationTabsModule } from './components';

@NgModule({
  imports: [
    InternalizationPipeModule,
    InternalizationUpdatedModule,
    InternalizationTabsModule,
  ],
  exports: [
    InternalizationPipeModule,
    InternalizationUpdatedModule,
    InternalizationTabsModule,
  ],
})
export class SharedModule {}
