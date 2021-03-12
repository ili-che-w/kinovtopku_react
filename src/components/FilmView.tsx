import React from 'react'
import { useParams } from 'react-router-dom'

interface RouteParams {
  id: string
}

const FilmView: React.SFC = () => {
  const { id } = useParams<RouteParams>()
  return (
    <div className="film-card">
      <div className="row">
        <div className="col-md-3 film-card__poster">Poster</div>
        <div className="col-md-9 film-card__details">
          <h2 className="film-card__title">Film Title (id {id})</h2>
          <p className="film-card__overview text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            fugit nisi. Voluptatem facilis expedita repudiandae ipsam adipisci
            consequatur, repellendus, praesentium amet quidem, debitis
            distinctio corporis iusto inventore quasi dolores cumque vel quas
            temporibus assumenda dolor! Corporis nihil nemo rem dolore
            asperiores et autem dolores!
          </p>
          {/* {film.overview || <i>No film description</i>} */}
        </div>
      </div>
    </div>
  )
}

export default FilmView
