interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList = (props: MovieListProps) => {
  const { movies } = props;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h3 className="mt-2 text-lg font-bold">{movie.title}</h3>
          <p className="text-sm text-gray-500">Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
