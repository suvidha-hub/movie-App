import { useEffect, useState } from "react"
import MovieCard from "../components/movieCard"
import "../css/home.css"
import { GetPopularMovies ,SearchMovies} from "../services/api";

export default function Home(){
    const[searchQuery,setSearchQuery]=useState("");
    const [movies,setMovies]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const loadPopularMovies=async()=>{
            try{
                const popularMovies=await GetPopularMovies();
                setMovies(popularMovies);  
            }
            catch(err){
                setError("failed to load");
            }
            finally{
                setLoading(false)
            }
           
        }
         loadPopularMovies()
    },[]);
  

   async function handleSearch(e){
        e.preventDefault();
        if(!searchQuery.trim()) {
         return;
        }
        if(loading) return;
        setLoading(true);
        try{
           const searchResult = await SearchMovies(searchQuery);
           setMovies(searchResult);
           setError(null);

        }catch(err){
            console.log(err)
          setError("failed to search movies....");
        }finally{
           setLoading(false);
        }

        setSearchQuery("");
    }
    return(
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder="Search movies...." className="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>


       {loading && <p>Loading movies...</p >}
       {error && <p style={{ color: "red" }}>{error}</p>}


            <div className="movies-grid">
        {Array.isArray(movies) ? (
        movies.map((movie) => (
      <MovieCard movie={movie} key={movie.imdbID} />
    ))
  ) : (
    <p>No movies found.</p>
  )}
</div>

        </div>
    )
}