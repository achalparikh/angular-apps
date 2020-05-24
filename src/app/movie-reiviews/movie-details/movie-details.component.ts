import { WriteReviewComponent } from './../write-review/write-review.component';
import { MovieApiServiceService } from './../movie-api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieApi: MovieApiServiceService,
    private activateRoute: ActivatedRoute,
    private loader: NgxSpinnerService,
    private dialog: MatDialog) { }

  public movie: any;
  public reviews: any;
  public reviewResults: any = [];

  ngOnInit() {
    this.loader.show();
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.movieApi.getMovieDetails(id).subscribe(r => {
      this.movie = r;
    }, () => {}, () => { this.loader.hide(); });
    this.loader.show();
    this.movieApi.getReviews(id).subscribe(r => {
      this.reviews = r;
      this.reviewResults = this.reviews.results;
    }, () => {}, () => { this.loader.hide(); });
  }

  writeReview() {
    const config = {
      disableClose: false,
      minWidth: '80vh',
      minHeight: '80vh'
    };

    let realReview: any;
    const dialogRef = this.dialog.open(WriteReviewComponent, config);
    dialogRef.afterClosed().subscribe(r => {
      console.log(r);
      realReview = {
        author: r.name,
        content: r.review
      };

      this.reviewResults.unshift(realReview);
    });


  }

}
