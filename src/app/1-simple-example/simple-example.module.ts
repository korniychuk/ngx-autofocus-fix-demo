import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SimpleExampleComponent } from './simple-example.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SimpleExampleComponent },
    ]),
  ],
  declarations: [SimpleExampleComponent]
})
export class SimpleExampleModule { }
