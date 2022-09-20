import { NgModule } from '@angular/core';

import { InternalizationPipe } from './internalization.pipe';

@NgModule({
  declarations: [InternalizationPipe],
  exports: [InternalizationPipe],
})
export class InternalizationPipeModule {}
