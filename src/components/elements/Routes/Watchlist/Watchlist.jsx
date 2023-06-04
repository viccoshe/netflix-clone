import { Link, useLoaderData } from "react-router-dom";
import { DATA } from "./../../../../data";
import styles from "./Watchlist.module.scss";

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
      <>
            <h1>Your watchlist</h1>
            <div className={styles.watchlist}>
                  {favourites.length > 0 
                  ?
                  favourites.map((movie, i) => {
                        return <div key={movie.id}
                                    className={styles.item}>

                                    <div className={styles.itemImg}>
                                          <img src={movie.mainImage} alt={movie.name} />   
                                    </div>
                                    <div className={styles.itemDetails}>
                                          <Link to={"/" + i}>
                                                {movie.alternativeName ? movie.alternativeName : movie.name}
                                          </Link>  
                                          <div className={styles.genres}>
                                                <span>{movie.genre ? movie.genre : 'Action'}</span>
                                                <div><i class='bx bxs-star'></i>
                                                      {movie.rating}
                                                </div>  
                                          </div> 
                                          <div>Time: <span>{movie.filmLength.toUpperCase(movie.filmLength)}</span></div>
                                          <div>{movie.shortDescription}</div>
                                    </div>
                                    <i class='bx bx-message-square-x bx-sm'></i>
                              </div>
 
                        })
                  :
                  <li>Add something to your watchlist</li>                   
                  }
            </div>      
      </>
      

     );
}
 
export default Watchlist;