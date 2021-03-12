import React from 'react'
import { useParams } from 'react-router-dom'

import Config from '../config'
import { IFilm } from '../film.model'

interface IProps {
  films: IFilm[]
}

interface RouteParams {
  id: string
}

const FilmView: React.SFC<IProps> = (props) => {
  const { id } = useParams<RouteParams>()
  const currentFilm = props.films.find((film) => film.id.toString() === id)

  return (
    <div className="film-card">
      <div className="row">
        <div className="col-md-3 film-card__poster">
          {currentFilm?.poster_path ? (
            <img
              src={Config.imgBaseUrl + currentFilm.poster_path}
              alt="Film poster"
            />
          ) : (
            <span>No image</span>
          )}
        </div>
        <div className="col-md-9 film-card__details">
          <h2 className="film-card__title">{currentFilm?.title}</h2>
          <p className="film-card__overview text-justify">
            {currentFilm?.overview || 'No film description'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FilmView
