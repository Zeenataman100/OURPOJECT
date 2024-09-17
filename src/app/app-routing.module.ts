import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazy loading concept
  { path: '', loadChildren: () => import('./comp1/comp1/comp1.module').then(m => m.Comp1Module) },
  { path: '', loadChildren: () => import('./comp2/comp2.module').then(m => m.Comp2Module) },
  { path: '', loadChildren: () => import('./comp3/comp3.module').then(m => m.Comp3Module) },
  { path: '', loadChildren: () => import('./comp4/comp4.module').then(m => m.Comp4Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
