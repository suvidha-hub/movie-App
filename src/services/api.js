const API_KEY="ee4344d9";
const BASE_URL=" http://www.omdbapi.com/";

// export const GetPopularMovies = async()=>{
//     try{
//    const res=await fetch(`${BASE_URL}/?s=avengers&apikey=${API_KEY}`);
//    const data = await res.json();
//    if(data.Response ==="True"){
//     return data.Search;
// }else{
//     console.log("OMDB error:",data.Error);
//     return [];
// }
//     } catch(err){
//         console.error("failed to fetch movies:",err);
//         return [];
//     }
// }

export const GetPopularMovies = async()=>{
      const response=await fetch(`${BASE_URL}/?s=avengers&apikey=${API_KEY}`);
      const data = await response.json();
     return data.Search;

}

export const SearchMovies = async(query)=>{
      const response=await fetch(`${BASE_URL}/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
      const data = await response.json();
     return data.Search;

}