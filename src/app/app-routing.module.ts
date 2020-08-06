import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // path: a string that matches the URL in the browser address bar
  // component: the component that the router should create when navigating to this route
  // This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when...
  // ...the URL is something like localhost:4200/heroes
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // the app will start here by default
  { path: 'detail/:id', component: HeroDetailComponent }, // the (:) in the path indicates that :idis a placeholder for a specific hero id
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  // the method is called forRoot() because you configure the router at the application's root level
  // the forRoot() method supplies the service providers and directives needed for routing, and...
  // performs the inital navigation based on the current browser URL
  imports: [RouterModule.forRoot(routes)],
  // AppRoutingModule exports RouterModule so it will be available througout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
