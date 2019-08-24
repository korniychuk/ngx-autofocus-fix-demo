import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AutofocusFixModule } from 'ngx-autofocus-fix';

import { SharedModule } from '../shared/shared.module';
import { AdvancedExampleComponent } from './advanced-example.component';

@NgModule({
  declarations: [AdvancedExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AdvancedExampleComponent },
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
})
export class AdvancedExampleModule { }
