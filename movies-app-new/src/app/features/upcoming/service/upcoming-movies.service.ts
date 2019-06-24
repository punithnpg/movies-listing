import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UpcomingMoviesService {
  constructor(private http: HttpClient) {}

  getUpcomingMovies() {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9b17cf90c4cdf15c08250f4f63a847cb&language=en-US&page=1";
    return this.http.get(url);
  }
}
