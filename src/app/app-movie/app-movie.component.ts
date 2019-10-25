import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-app-movie',
  templateUrl: './app-movie.component.html',
  styleUrls: ['./app-movie.component.css']
})
export class AppMovieComponent implements OnInit {
  mov: any;
  id: number;

  constructor(private movieInt: DataServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
      }
    );
    this.mov = this.movieInt.getMovie(this.id);
  }

  sendBack() {
    this.router.navigate(['/movies']);
  }

}
