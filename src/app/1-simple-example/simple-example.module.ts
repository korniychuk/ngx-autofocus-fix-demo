import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AutofocusFixModule } from 'ngx-autofocus-fix';

import { SharedModule } from '../shared/shared.module';

import { SimpleExampleComponent } from './simple-example.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SimpleExampleComponent },
    ]),

    /**
     * Warning!
     * I provide module with .forRoot() call to non-root module because of this module imported via lazy-load.
     * This is important because lazy-load modules encapsulates it providers.
     * As the result we will not have any providers or directives of `AutofocusFixModule` out of this module.
     */
    AutofocusFixModule.forRoot(),

    SharedModule,
  ],
  declarations: [SimpleExampleComponent]
})
export class SimpleExampleModule { }
