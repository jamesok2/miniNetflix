import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AppMovieComponent } from './app-movie/app-movie.component';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: AppMovieComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
