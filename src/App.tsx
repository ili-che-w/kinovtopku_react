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

const App: React.FC = () => {
  const url = Config.url
  const headers = Config.headers

  const [films, setFilms] = React.useState<IFilm[]>([])
  const [error, setError] = React.useState<string>('')
  // const [error, setError]: [string, (error: string) => void] = React.useState(
  //   ''
  // )

  React.useEffect(() => {
    axios
      .get<IResult>(url, headers)
      .then((response) => {
        setFilms(response.data.results)
      })
      .catch((err) => {
        setError(err.message)
      })
  })

  return (
    <div className="App">
      <BrowserRouter>
        <div className="jumbotron">
          <Header />
        </div>
        <div className="container">
          <Switch>
            <Route path="/film/:id">
              <FilmView />
            </Route>
            <Route path="/">
              <FilmsList films={films} />
            </Route>
          </Switch>
        </div>
        {error && <p className="error">{error}</p>}
      </BrowserRouter>
    </div>
  )
}

export default App
