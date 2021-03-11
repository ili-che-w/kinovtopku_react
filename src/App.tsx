import React from 'react'
import './App.css'
import axios from 'axios'

interface IPost {
  backdrop_path: string | null
  id: number
  overview: string
  title: string
  poster_path: string | null
  release_date: string
}

interface IResult {
  results: IPost[]
}

const defaultPosts: IPost[] = []

const App: React.SFC = () => {
  const url =
    'https://api.themoviedb.org/3/discover/movie?api_key=5a04ce8778f4b2fcf7a03d527e0ac099&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1'
  const headers = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(
    defaultPosts
  )

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true)

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  )

  React.useEffect(() => {
    axios
      .get<IResult>(url, headers)
      .then((response) => {
        setPosts(response.data.results)
        setLoading(false)
      })
      .catch((ex) => {
        const err =
          ex.response.status === 404
            ? 'Resource not found'
            : 'An unexpected error occured'
        setError(err)
        setLoading(false)
      })
  })

  return (
    <div className="App container">
      <div className="posts">
        {posts.map((post) => (
          <div className="row" key={post.id}>
            <div className="col-3 image">
              {post.poster_path ? <pre>{post.poster_path}</pre> : <p>No image</p>}
            </div>
            <div className="col-9">
              <h3>{post.title}</h3>
              <p>{post.overview}</p>
            </div>
          </div>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default App
