import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdvancedExampleComponent } from './advanced-example.component';

@NgModule({
  declarations: [AdvancedExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdvancedExampleComponent },
    ]),
  ]
})
export class AdvancedExampleModule { }
