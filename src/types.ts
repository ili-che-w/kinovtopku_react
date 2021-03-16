import { IFilm } from './film.model'
import { IFilmExt } from './filmExt.model'

export type ContextType = {
  films: IFilm[]
  currentFilm: IFilmExt
  fetchFilms: () => void
  fetchCurrentFilm: (id: number) => void
  errorMsg: string
}
