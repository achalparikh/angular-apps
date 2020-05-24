import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieReviewsRoutingModule } from './movie-reviews-routing.module';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchCardsComponent } from './search-cards/search-cards.component';
import { WriteReviewComponent } from './write-review/write-review.component';

@NgModule({
  declarations: [SearchMoviesComponent, MovieDetailsComponent, SearchCardsComponent, WriteReviewComponent],
  imports: [
    CommonModule,
    MovieReviewsRoutingModule,
    SharedModule
  ],
  entryComponents: [WriteReviewComponent]
})
export class MovieReviewsModule { }
