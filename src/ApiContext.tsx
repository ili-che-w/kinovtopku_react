import axios from 'axios'
import React from 'react'
import { IFilm, defaultFilms } from './film.model'
import { IFilmExt, defaultCurrentFilm } from './filmExt.model'

import Config from './config'
import { ContextType } from './types'

export const APIContext = React.createContext<ContextType | null>(null)

interface IResult {
  results: IFilm[]
}

const APIProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [films, setFilms] = React.useState<IFilm[]>(defaultFilms)
  const [currentFilm, setCurrentFilm] = React.useState<IFilmExt>(
    defaultCurrentFilm
  )
  const [errorMsg, setErrorMsg] = React.useState<string>('')

  const fetchFilms = () => {
    const url = Config.url
    axios
      .get<IResult>(url)
      .then((response) => {
        setFilms(response.data.results)
      })
      .catch((err) => {
        setErrorMsg(err.message)
      })
  }

  const fetchCurrentFilm = (id: number) => {
    const url =
      Config.API.baseUrl +
      `/movie/${id}?api_key=${Config.API.key}&append_to_response=images`

    axios
      .get<IFilmExt>(url)
      .then((response) => {
        setCurrentFilm(response.data)
      })
      .catch((err) => {
        setErrorMsg(err.message)
      })
  }

  return (
    <APIContext.Provider
      value={{ films, currentFilm, fetchFilms, fetchCurrentFilm, errorMsg }}
    >
      {children}
    </APIContext.Provider>
  )
}

export default APIProvider
