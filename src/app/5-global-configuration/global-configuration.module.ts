import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlobalConfigurationComponent } from './global-configuration.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: GlobalConfigurationComponent },
    ]),
  ],
  declarations: [GlobalConfigurationComponent]
})
export class GlobalConfigurationModule { }
