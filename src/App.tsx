import React from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss'

import Config from './config'
import { IFilm } from './film.model'
import Header from './components/Header'
import FilmView from './components/FilmView'
import FilmsList from './components/FilmsList'

interface IResult {
  results: IFilm[]
}

const App: React.SFC = () => {
  const url = Config.url
  const headers = Config.headers

  const [films, setFilms]: [IFilm[], (films: IFilm[]) => void] = React.useState(
    Config.defaultFilms
  )
  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  )

  React.useEffect(() => {
    axios
      .get<IResult>(url, headers)
      .then((response) => {
        setFilms(response.data.results)
      })
      .catch((err) => {
        setError(err)
      })
  })

  return (
    <div className="App">
      <div className="jumbotron">
        <Header />
      </div>
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/film/:id">
              <FilmView />
            </Route>
            <Route path="/">
              <FilmsList films={films} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default App
