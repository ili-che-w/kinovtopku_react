export interface IFilm {
  backdrop_path: string | null
  id: number
  overview: string
  title: string
  poster_path: string | null
  release_date: string
  vote_average: number
  vote_count: number
}

export const defaultFilms = [
  {
    backdrop_path: null,
    id: 550,
    overview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique laudantium fuga? Repellendus, debitis deserunt reiciendis enim quaerat, quae ullam harum vel, praesentium eius possimus hic necessitatibus laborum!',
    title: 'Lorem Ipsum Dolor Sit Amet',
    poster_path: null,
    release_date: '1970-01-01',
    vote_average: 1,
    vote_count: 1
  }
] as IFilm[]
