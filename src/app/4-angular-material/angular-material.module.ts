import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularMaterialComponent } from './angular-material.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AngularMaterialComponent },
    ]),
  ],
  declarations: [AngularMaterialComponent]
})
export class AngularMaterialModule { }
