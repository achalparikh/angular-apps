import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  API_KEY = '2e1294a9d4aa5783fae54fa9dbf2c9ba';

  constructor(private http: HttpClient) { }

  getMovieInfo (queryParams: any) {
    const params = queryParams;
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.API_KEY + '&language=en-US', {params});
  }

  getMovieDetails (id: any) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_KEY + '&language=en-US');
  }

  getImage (imageLink: string) {
    return this.http.get('http://image.tmdb.org/t/p/w1280/' + imageLink);
  }

  getReviews (id: any) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key=' + this.API_KEY + '&language=en-US');
  }

}
