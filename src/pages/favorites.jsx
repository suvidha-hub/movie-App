import "../css/favorites.css"
import MovieCard from "../components/movieCard"
import { useMovieContext } from "../context/MovieContext"

export default function Favorites(){
        
    const { favorites } = useMovieContext();
      const hasFavorites = Array.isArray(favorites) && favorites.length > 0;

  if (hasFavorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </div>
    );
  }


    return(
        <div className="favorites-empty">
            <h2>NO Favorite Movie Yet</h2>
            <p>Start adding movies to your favorites and they will appear here.</p>

        </div>
    )
}