import { NgModule } from '@angular/core';

import { InternalizationUpdatedPipe } from './internalization-updated.pipe';

@NgModule({
  declarations: [InternalizationUpdatedPipe],
  exports: [InternalizationUpdatedPipe],
})
export class InternalizationUpdatedModule {}
