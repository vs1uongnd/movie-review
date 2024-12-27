import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/tmdbService';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchPopularMovies()
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching popular movies:', error));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: '200px' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
