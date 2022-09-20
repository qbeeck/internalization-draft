import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalizationPipe } from './pipes';
import { InternalizationTabsModule } from './components';

@NgModule({
  imports: [CommonModule, InternalizationTabsModule],
  declarations: [InternalizationPipe],
  exports: [InternalizationPipe, InternalizationTabsModule],
})
export class SharedModule {}
