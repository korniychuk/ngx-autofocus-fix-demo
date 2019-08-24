import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AutofocusFixModule } from 'ngx-autofocus-fix';

import { SharedModule } from '../shared/shared.module';

import { SimpleExampleComponent } from './simple-example.component';

@NgModule({
  imports: [
    CommonModule,
    AutofocusFixModule.forRoot(),
    SharedModule,
    RouterModule.forChild([
      { path: '', component: SimpleExampleComponent },
    ]),
  ],
  declarations: [SimpleExampleComponent]
})
export class SimpleExampleModule { }
