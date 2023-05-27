import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'continents', loadComponent: () =>
      import('./components/continents/continents.component')
        .then(m => m.ContinentsComponent)
  },
  {
    path: 'continents/:code',
    loadComponent: () =>
      import('./components/continent-details/continent-details.component')
        .then(m => m.ContinentDetailsComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
