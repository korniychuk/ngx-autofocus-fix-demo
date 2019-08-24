import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfiniteScrollComponent } from './infinite-scroll.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: InfiniteScrollComponent },
    ]),
  ],
  declarations: [InfiniteScrollComponent]
})
export class InfiniteScrollModule { }
