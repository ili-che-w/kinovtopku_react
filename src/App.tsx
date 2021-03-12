import React from 'react'
import './App.scss'
import axios from 'axios'
import {IFilm} from './film.model'
import FilmsList from './components/FilmsList'

interface IResult {
  results: IFilm[]
}

const defaultFilms: IFilm[] = []

const App: React.SFC = () => {
  const url =
    'https://api.themoviedb.org/3/discover/movie?api_key=5a04ce8778f4b2fcf7a03d527e0ac099&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1'
  // const imgBaseUrl = 'https://image.tmdb.org/t/p/w200'
  const headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const [films, setFilms]: [IFilm[], (films: IFilm[]) => void] = React.useState(
    defaultFilms
  )

  // If I would like a loader
  // const [loading, setLoading]: [
  //   boolean,
  //   (loading: boolean) => void
  // ] = React.useState<boolean>(true)

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  )

  React.useEffect(() => {
    axios
      .get<IResult>(url, headers)
      .then((response) => {
        setFilms(response.data.results)
        // setLoading(false)
      })
      .catch((ex) => {
        const err =
          ex.response.status === 404
            ? 'Resource not found'
            : 'An unexpected error occured'
        setError(err)
        // setLoading(false)
      })
  })

  return (
    <div className="App container">
      <FilmsList films={films} />
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default App
