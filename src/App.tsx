import React from 'react'
import './App.scss'
import axios from 'axios'

import Config from './config'
import {IFilm} from './film.model'
import FilmsList from './components/FilmsList'
import Header from './components/Header'

interface IResult {
  results: IFilm[]
}

const App: React.SFC = () => {
  const url = Config.url
  const headers = Config.headers

  const [films, setFilms]: [IFilm[], (films: IFilm[]) => void] = React.useState(
    Config.defaultFilms
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
    <div className="App">
      <div className="jumbotron">
        <Header />
      </div>
      <div className="container">
        <FilmsList films={films} />
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default App
