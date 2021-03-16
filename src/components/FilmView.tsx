import React from 'react'
import { useParams } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'

import Config from '../config'
import { IFilmExt, Image } from '../filmExt.model'
import { APIContext } from '../ApiContext'
import { ContextType } from '../types'

interface RouteParams {
  id: string
}

const FilmView: React.FC = () => {
  // TODO: Move to "helpers"
  function extractFilePaths(images: Image[]): string[] {
    return images.map((img) => img.file_path)
  }
  function getBackdropsAndPostersPaths(film: IFilmExt): string[] {
    return extractFilePaths(film.images.backdrops).concat(
      extractFilePaths(film.images.posters)
    )
  }
  function transformItemForImageGallery(filePath: string) {
    return {
      original: Config.imgBaseUrl500 + filePath,
      thumbnail: Config.imgBaseUrl + filePath
    }
  }
  function getItemsForGallery(film: IFilmExt): any[] {
    return getBackdropsAndPostersPaths(film).map((img) =>
      transformItemForImageGallery(img)
    )
  }
  // EOF TODO

  const { currentFilm, fetchCurrentFilm, errorMsg } = React.useContext(
    APIContext
  ) as ContextType

  const { id } = useParams<RouteParams>()
  React.useEffect(() => {
    fetchCurrentFilm(parseInt(id))
  }, [fetchCurrentFilm, id])

  return (
    <div className='film-card'>
      {errorMsg ? (
        <p className='error'>{errorMsg}</p>
      ) : (
        <div className='row'>
          <div className='col-md-3 film-card__poster'>
            {currentFilm.poster_path ? (
              <img
                src={Config.imgBaseUrl + currentFilm.poster_path}
                alt='Film poster'
              />
            ) : (
              <span>No image</span>
            )}
          </div>
          <div className='col-md-9 film-card__details'>
            <h2 className='film-card__title'>{currentFilm.title}</h2>
            <p className='film-card__overview text-justify'>
              {currentFilm.overview || <i>No film description</i>}
            </p>

            <h3>Backdrops</h3>
            {currentFilm.images &&
            currentFilm.images.backdrops.length &&
            currentFilm.images.posters.length ? (
              <ImageGallery items={getItemsForGallery(currentFilm)} />
            ) : (
              <i>No images</i>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default FilmView
