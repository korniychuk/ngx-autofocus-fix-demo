import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SimpleExampleBindingComponent } from './simple-example-binding.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SimpleExampleBindingComponent },
    ]),
  ],
  declarations: [SimpleExampleBindingComponent]
})
export class SimpleExampleBindingModule { }
