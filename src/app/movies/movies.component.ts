import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component ({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any = [];

  constructor(private movieInt: DataServiceService) {}

  ngOnInit() {
    this.movies = this.movieInt.getMovies();
  }
}
