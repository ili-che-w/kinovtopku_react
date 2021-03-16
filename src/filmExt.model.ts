import { IFilm } from './film.model'

export interface Image {
    file_path: string
    // TODO: filter backdrops by vote_count >= 1
    // vote_count: string
}

interface Images {
  backdrops: Array<Image>,
  posters: Array<Image>
}

export interface IFilmExt extends IFilm {
    images: Images
}

export const defaultCurrentFilm = {
  backdrop_path: null,
  id: 10101010,
  images: {
      backdrops: [] as Image[],
      posters: [] as Image[],
  },
  overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique laudantium fuga? Repellendus, debitis deserunt reiciendis enim quaerat, quae ullam harum vel, praesentium eius possimus hic necessitatibus laborum!',
  title: 'Lorem Ipsum Dolor Sit Amet',
  poster_path: null,
  release_date: '1970-01-01',
  vote_average: 1,
  vote_count: 1
} as IFilmExt
