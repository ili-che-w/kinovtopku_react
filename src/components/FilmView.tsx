import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

import Config from '../config'
import { IFilm } from '../film.model'
import { IFilmExt } from '../filmExt.model'

interface IProps {
  films: IFilm[]
}

interface RouteParams {
  id: string
}

const FilmView: React.SFC<IProps> = (props) => {
  const { id } = useParams<RouteParams>()

  const [currentFilm, setCurrentFilm]: [
    IFilm,
    (films: IFilm) => void
  ] = React.useState(Config.defaultFilm)

  const url = Config.API.baseUrl + `/movie/${id}?api_key=${Config.API.key}`
  React.useEffect(() => {
    axios.get<IFilm>(url).then((response) => {
      setCurrentFilm(response.data)
    })
  })

  return (
    <div className="film-card">
      <div className="row">
        <div className="col-md-3 film-card__poster">
          {currentFilm.poster_path ? (
            <img
              src={Config.imgBaseUrl + currentFilm.poster_path}
              alt="Film poster"
            />
          ) : (
            <span>No image</span>
          )}
        </div>
        <div className="col-md-9 film-card__details">
          <h2 className="film-card__title">{currentFilm.title}</h2>
          <p className="film-card__overview text-justify">
            {currentFilm.overview || <i>No film description</i>}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FilmView
