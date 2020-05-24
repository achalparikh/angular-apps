import { SearchCardsComponent } from './search-cards/search-cards.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchMoviesComponent,
    children: [
      {
        path: 'search',
        component: SearchCardsComponent
      },
      {
        path: 'details/:id',
        component: MovieDetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieReviewsRoutingModule { }
