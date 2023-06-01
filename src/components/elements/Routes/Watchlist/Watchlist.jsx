import { Link, useLoaderData } from "react-router-dom";
import { DATA } from "./../../../../data";

const Watchlist = () => {
   //const data = useLoaderData();
   const data = DATA;

   const storagedFavs = JSON.parse(localStorage.getItem('favourites'));
   const favourites = data.length > 0 && data.filter((movie, i) => {
      if (storagedFavs.length > 0 && storagedFavs.some((item, i) => item[0] === movie.id)){
            return movie;
      }
   })



    return ( 
      <div>
            <h1>Your watchlist</h1>
            {favourites.length > 0 
            ?
            favourites.map((movie, i) => {
                  return <li key={movie.id}>
                              <Link to={"/" + i}>
                                    {movie.alternativeName ? movie.alternativeName : movie.name}
                              </Link>   
                        </li>
                  })
            :
            <li>Add something to your watchlist</li>                   
            }
      </div>

     );
}
 
export default Watchlist;