import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: any = [];

  constructor(private movieInt: DataServiceService){
    this.movies  = this.movieInt.getMovies();
  }

}
