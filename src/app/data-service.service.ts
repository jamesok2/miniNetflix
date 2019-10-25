import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  movies = [
    {id: 1,
      name: 'Hobbs and shows',
      image: 'assets/images/movie1.jpeg',
      year: 2014,
      director: 'james',
      rate: 5,
      released: 2019,
      runtime: '2 hrs',
      genre: 'Action',
      writer: 'Abuyako',
      actors: 'Johson',
      plot: 'Dar es salaam',
      language: 'English',
      country: 'USA'
    },
    {id: 2,
      name: 'Unlock',
      year: 2017,
      image: 'assets/images/movie2.jpeg',
      director: 'Baruti',
      rate: 5,
      released: 2017,
      runtime: '2 hrs',
      genre: 'Action',
      writer: 'Michael',
      actors: 'Idd',
      plot: 'Dodoma',
      language: 'English',
      country: 'Tanzania'
    },
    {id: 3,
      name: 'The green book',
      year: 2018,
      image: 'assets/images/movie3.jpeg',
      director: 'Baruti',
      rate: 5,
      released: 2017,
      runtime: '2 hrs',
      genre: 'Action',
      writer: 'Michael',
      actors: 'Idd',
      plot: 'Dodoma',
      language: 'English',
      country: 'Tanzania'
    },
    {id: 4,
      name: 'Breath',
      year: 2017,
      image: 'assets/images/movie4.jpeg',
      director: 'Baruti',
      rate: 5,
      released: 2017,
      runtime: '2 hrs',
      genre: 'Action',
      writer: 'Michael',
      actors: 'Idd',
      plot: 'Dodoma',
      language: 'English',
      country: 'Tanzania'
    },
    {id: 5,
      name: 'Unlock',
      year: 2017,
      image: 'assets/images/movie5.jpeg',
      director: 'Baruti',
      rate: 5,
      released: 2017,
      runtime: '2 hrs',
      genre: 'Action',
      writer: 'Michael',
      actors: 'Idd',
      plot: 'Dodoma',
      language: 'English',
      country: 'Tanzania'
    }
  ];

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    return this.movies.find(movie => movie.id === id);
  }
  constructor() { }
}
