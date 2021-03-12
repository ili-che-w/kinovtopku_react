import React from 'react'
import {IFilm} from '../film.model'

interface IProps {
    films: IFilm[]
}

const Config = {
  imgBaseUrl: 'https://image.tmdb.org/t/p/w200'
}

const FilmsList: React.SFC<IProps> = (props) => (
  <ul className="films">
    {props.films.map((film) => (
      <li className="film my-4">
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
            <div className="film__info">Release date: {film.release_date}</div>
            {film.overview ? (
              <p className="film__overview">{film.overview}</p>
            ) : (
              <p>No film description</p>
            )}
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