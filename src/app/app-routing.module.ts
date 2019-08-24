import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: '1-simple-example',
    loadChildren: './1-simple-example/simple-example.module#SimpleExampleModule',
  },
  {
    path: '2-simple-example-binding',
    loadChildren: './2-simple-example-binding/simple-example-binding.module#SimpleExampleBindingModule',
  },
  {
    path: '3-simple-example-smart',
    loadChildren: './3-simple-example-smart/simple-example-smart.module#SimpleExampleSmartModule',
  },
  {
    path: '4-angular-material',
    loadChildren: './4-angular-material/angular-material.module#AngularMaterialModule',
  },
  {
    path: '5-global-configuration',
    loadChildren: './5-global-configuration/global-configuration.module#GlobalConfigurationModule',
  },
  {
    path: '6-infinite-scroll',
    loadChildren: './6-infinite-scroll/infinite-scroll.module#InfiniteScrollModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
  ],
})
export class AppRoutingModule {}
