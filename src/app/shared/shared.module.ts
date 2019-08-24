import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionComponent } from './section.component';
const components: any[] = [SectionComponent];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class SharedModule {}
