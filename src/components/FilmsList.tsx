import React from 'react'
import { Link } from 'react-router-dom'

import Config from '../config'
import { APIContext } from '../ApiContext'
import { ContextType } from '../types'

const FilmsList: React.FC = () => {
  const { films, fetchFilms } = React.useContext(APIContext) as ContextType

  React.useEffect(() => {
    fetchFilms()
  }, [fetchFilms])

  return (
    <ul className='films'>
      {films.map((film, idx) => (
        <li className='film my-4' key={idx}>
          <div className='row' key={film.id}>
            <div className='col-3 film__image'>
              {film.poster_path ? (
                <img
                  className='img-fluid'
                  src={Config.imgBaseUrl + film.poster_path}
                  alt='Film Preview'
                />
              ) : (
                <p>No image</p>
              )}
            </div>
            <div className='col-9'>
              <h3 className='film__title'>
                <Link to={`/film/${film.id}`}>{film.title}</Link>
              </h3>
              <div className='film__info'>
                Release date: {film.release_date || 'unknown'} | Votes:{' '}
                {film.vote_count} | Rating: {film.vote_average}
              </div>
              <p className='film__overview text-justify'>
                {film.overview || <i>No film description</i>}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default FilmsList
