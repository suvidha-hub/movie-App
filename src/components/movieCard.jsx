import { useMovieContext } from "../context/MovieContext";
import "../css/moviecard.css"


export default function MovieCard({movie}){
  const{isFavorite,addToFavorites,removeFromFavorites} =useMovieContext()
  const favorite =isFavorite(movie.imdbID)

    function favoriteClick(e){
        e.preventDefault();
        if(favorite) removeFromFavorites(movie.imdbID)
          else addToFavorites(movie)
    }
    return(
      <div className="movie-card">
          <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-overlay">
                 <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={favoriteClick}>
                    ♥
                </button>
            </div>
          </div>
          <div className="movie-info">
               <h3>{movie.Title}</h3>
               <p>{movie.Year}</p>
          </div>
      </div>
    )
}