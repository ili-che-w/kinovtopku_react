import { IFilm } from './film.model'
import { IFilmExt } from './filmExt.model'

const Config = {
  API: {
    baseUrl: 'https://api.themoviedb.org/3',
    key: '5a04ce8778f4b2fcf7a03d527e0ac099'
  },
  url:
    'https://api.themoviedb.org/3/discover/movie?api_key=5a04ce8778f4b2fcf7a03d527e0ac099&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=1.8&vote_count.gte=10',
  headers: {
    headers: {
      'Content-Type': 'application/json'
    }
  },
  imgBaseUrl: 'https://image.tmdb.org/t/p/w200',
  imgBaseUrl500: 'https://image.tmdb.org/t/p/w500',

  defaultFilms: [] as IFilm[],
  defaultFilm: {
    backdrop_path: null,
    id: 0,
    images: {
      backdrops: [],
      posters: []
    },
    overview: '',
    title: '',
    poster_path: null,
    release_date: '',
    vote_average: 0,
    vote_count: 0
  } as IFilmExt
}

export default Config
