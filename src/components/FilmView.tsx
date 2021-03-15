import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'

import Config from '../config'
import { IFilmExt, Image } from '../filmExt.model'

interface RouteParams {
  id: string
}

const FilmView: React.FC = () => {
  const { id } = useParams<RouteParams>()

  const [currentFilm, setCurrentFilm] = React.useState<IFilmExt>({} as IFilmExt)
  const [error, setError] = React.useState<string>('')

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

  const url =
    Config.API.baseUrl +
    `/movie/${id}?api_key=${Config.API.key}&append_to_response=images`

  React.useEffect(() => {
    axios
      .get<IFilmExt>(url)
      .then((response) => {
        setCurrentFilm(response.data)
      })
      .catch((err) => {
        setError(err.message)
      })
  })

  return (
    <div className="film-card">
      {error ? (
        <p className="error">{error}</p>
      ) : (
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
