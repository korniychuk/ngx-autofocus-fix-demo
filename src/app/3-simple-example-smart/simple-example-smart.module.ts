import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SimpleExampleSmartComponent } from './simple-example-smart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SimpleExampleSmartComponent },
    ]),
  ],
  declarations: [SimpleExampleSmartComponent]
})
export class SimpleExampleSmartModule { }
