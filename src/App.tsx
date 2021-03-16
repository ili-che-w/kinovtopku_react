import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import FilmView from './components/FilmView'
import FilmsList from './components/FilmsList'
import APIProvider, { APIContext } from './ApiContext'
import { ContextType } from './types'

import './App.scss'

const App: React.FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='jumbotron'>
          <Header />
        </div>
        <div className='container'>
          <APIProvider>
            <Switch>
              <Route path='/film/:id'>
                <FilmView />
              </Route>
              <Route path='/'>
                <FilmsList />
              </Route>
            </Switch>
          </APIProvider>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
