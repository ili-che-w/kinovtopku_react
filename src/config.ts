const Config = {
  API: {
    baseUrl: 'https://api.themoviedb.org/3',
    key: process.env.REACT_APP_API_KEY
  },
  url:
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=1.5&vote_count.gte=10`,
  headers: {
    headers: {
      'Content-Type': 'application/json'
    }
  },
  imgBaseUrl: 'https://image.tmdb.org/t/p/w200',
  imgBaseUrl500: 'https://image.tmdb.org/t/p/w500',
}

export default Config
