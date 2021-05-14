import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'pageone',
    loadChildren: () => 
      import('./page-one/page-one.module').then(m => m.PageOneModule)
  },
  {
    path: 'pagetwo',
    loadChildren: () => 
      import('./page-two/page-two.module').then(m => m.PageTwoModule)
  },
  {
    path: '*',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
