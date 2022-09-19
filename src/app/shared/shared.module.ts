import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalizationPipe } from './pipes';
import { InternalizationTabsComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [InternalizationPipe, InternalizationTabsComponent],
  exports: [InternalizationPipe, InternalizationTabsComponent],
})
export class SharedModule {}
