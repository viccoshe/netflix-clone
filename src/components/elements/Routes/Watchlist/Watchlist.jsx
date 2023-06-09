import { Link, useLoaderData } from "react-router-dom";
import { DATA } from "./../../../../data";
import styles from "./Watchlist.module.scss";
import { removeFromFavourites } from "../../../../utiles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Watchlist = () => {
   //const data = useLoaderData();
   const data = DATA;
   const [ favourites, setFavourites ] = useState(JSON.parse(localStorage.getItem('favourites')));

   const removeFav = (movie) => {
      removeFromFavourites(movie);
      if(favourites && favourites.length > 0){
            if(favourites.some((item) => item[0] === movie.id)){
              const elem = favourites.find((item, i) => item[0] === movie.id);
                setFavourites(favourites.filter(i => i !== elem));
                console.log(favourites);
                  }
            }
      }




    return ( 
      <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4}}
      >
            <h1>Your watchlist</h1>
            <div className={styles.watchlist}>
                  {favourites && favourites.length > 0 && data.length > 0
                  ?
                  data.map((movie, i) => {
                        if (favourites.length > 0  && favourites.some((item, i) => item[0] === movie.id)){
                              return  <motion.div key={movie.id}
                                           className={styles.item}
                                           initial={{ scale: 1 }}
                                           whileHover={{ scale: 1.01 }}
                                           transition={{ duration: 0.1 }}
                                      >
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
                              <button onClick={() => removeFav(movie)}><i className='bx bx-message-square-x bx-sm'></i></button>
                        </motion.div>
                  
                        }

                  })
                        
                  :
                  <div 
                        className={styles.emptyList}
                  >
                        <i 
                              className='bx bx-ghost'

                        ></i>
                        <span>Add something to your watchlist</span>                  
                  </div>
                  }
            </div>      
      </motion.div>
      

     );
}
 
export default Watchlist;