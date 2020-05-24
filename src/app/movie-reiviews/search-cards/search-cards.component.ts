import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { MovieApiServiceService } from '../movie-api-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html',
  styleUrls: ['./search-cards.component.scss']
})
export class SearchCardsComponent implements OnInit {

  public movieForm: FormGroup;
  public results: any[] = [];
  constructor(private fb: FormBuilder, private movieApi: MovieApiServiceService, private loader: NgxSpinnerService) {
    this.movieForm = this.fb.group({
      search: ['', Validators.required],
      year: ['']
    });
   }

  ngOnInit() {

  }

  getInfo() {
    this.loader.show();
    const params = new HttpParams().set('query', this.search.value).set('year', this.year.value);
    this.movieApi.getMovieInfo(params).subscribe((r: any) => {
      this.results = r.results;
    }, () => {
      this.loader.hide();
    }, () => {
      this.loader.hide();
    });
  }

  public get search () {
    return this.movieForm.get('search');
  }

  public get year () {
    return this.movieForm.get('year');
  }


}
