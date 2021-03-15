import { IFilm } from './film.model'

interface Image {
    file_path: string
    // TODO: filter backdrops by vote_count >= 1
    // vote_count: string
}

interface Images {
    backdrops: Array<Image>
}

export interface IFilmExt extends IFilm {
    images: Images
}