import {IFilm} from './film.model'

const Config = {
  url:
    'https://api.themoviedb.org/3/discover/movie?api_key=5a04ce8778f4b2fcf7a03d527e0ac099&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=0.1',
  headers: {
    headers: {
      'Content-Type': 'application/json'
    }
  },
  imgBaseUrl: 'https://image.tmdb.org/t/p/w200',

  defaultFilms: [] as IFilm[]
}

export default Config
