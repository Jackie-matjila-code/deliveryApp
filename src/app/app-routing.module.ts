import { TabsPage } from './menu/tabs/tabs.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: './menu/tabs/home',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'tabs',
    component: TabsPage, children: [
      {
        path: './menu/tabs/home',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./Components/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./Components/sign-up/sign-up.module').then( m => m.SignUpPageModule)
      },
   
    ]
  },
  {
    path: 'sig-in',
    loadChildren: () => import('./Components/sig-in/sig-in.module').then( m => m.SigInPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
