import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '1-simple-example',
    loadChildren: './1-simple-example/simple-example.module#SimpleExampleModule',
  },
  {
    path: '2-advanced-example',
    loadChildren: './2-advanced-example/advanced-example.module#AdvancedExampleModule',
  },
  {
    path: '3-angular-material',
    loadChildren: './3-angular-material/angular-material.module#AngularMaterialModule',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1-simple-example',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
