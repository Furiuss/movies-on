import {useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import './MovieGrid.css'

function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`

    getTopRatedMovies(topRatedUrl);
  }, [])

  return (
    <div className='container'>
      <h2 className='title'>Melhores Filmes</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
        }
      </div>
    </div>
  );
}

export default Home;