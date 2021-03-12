import React from 'react'

import Config from '../config'
import { IFilm } from '../film.model'

interface IProps {
  films: IFilm[]
}

const FilmsList: React.SFC<IProps> = (props) => (
  <ul className="films">
    {props.films.map((film, idx) => (
      <li className="film my-4" key={idx}>
        <div className="row" key={film.id}>
          <div className="col-3 film__image">
            {film.poster_path ? (
              <img
                className="img-fluid"
                src={Config.imgBaseUrl + film.poster_path}
                alt="Film Preview"
              />
            ) : (
              <p>No image</p>
            )}
          </div>
          <div className="col-9">
            <h3 className="film__title">{film.title}</h3>
            <div className="film__info">
              Release date: {film.release_date || 'unknown'} |
              Votes: {film.vote_count} |
              Rating: {film.vote_average}
            </div>
            <p className="film__overview">
              {film.overview || <i>No film description</i>}
            </p>
          </div>
        </div>
      </li>
    ))}
  </ul>
)

FilmsList.defaultProps = {
  films: []
}

export default FilmsList
