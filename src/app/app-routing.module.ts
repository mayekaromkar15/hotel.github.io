import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { LandingComponent } from './main/landing/landing.component';
import { OverviewComponent } from './main/overview/overview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'home', pathMatch: 'full', component: LandingComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
