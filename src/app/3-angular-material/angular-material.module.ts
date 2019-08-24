import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AutofocusFixModule } from 'ngx-autofocus-fix';

import { SharedModule } from '../shared/shared.module';

import { AngularMaterialComponent } from './angular-material.component';
import { MatInputTimerComponent, MatInputTimerOnPushComponent } from './mat-input-timer-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AngularMaterialComponent },
    ]),

    MatInputModule,
    MatButtonModule,

    /**
     * Warning!
     * I provide module with .forRoot() call to non-root module because of this module imported via lazy-load.
     * This is important because lazy-load modules encapsulates it providers.
     * As the result we will not have any providers or directives of `AutofocusFixModule` out of this module.
     */
    AutofocusFixModule.forRoot(),

    SharedModule,
  ],
  declarations: [AngularMaterialComponent, MatInputTimerComponent, MatInputTimerOnPushComponent],
})
export class AngularMaterialModule { }
