import { useEffect, useState, useParams } from "react";
import styles from "./Popular.module.scss";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import { toggleFavourites } from "../../../../utiles";
import { motion } from "framer-motion";
import "swiper/scss";
import "swiper/scss/navigation";

const Popular = () => {
    const data = useLoaderData();
    const  [popularMovies, setPopularMovies ] = useState([]);
    const navigation = useNavigation();
    const [ favs, setFavs ] = useState(
        JSON.parse(localStorage.getItem('favourites')) 
        ? JSON.parse(localStorage.getItem('favourites')) 
        : []
    );



    // const swiper = new Swiper('.swiper', {
    //     // Default parameters
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     // Responsive breakpoints
    //     breakpoints: {
    //       // when window width is >= 320px
    //       320: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //       },
    //       // when window width is >= 480px
    //       480: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //       },
    //       // when window width is >= 640px
    //       640: {
    //         slidesPerView: 4,
    //         spaceBetween: 40
    //       }
    //     }
    //   })
      
      
    const toggleFav = ( movie ) => {
        toggleFavourites( movie );


        if(favs.length !== 0){
            if(favs.length > 0 && favs.some((item, i) => item[0] === movie.id)){
                setFavs(favs.filter(i => i[0] !== movie.id))
            }else{
                setFavs([...favs, [movie.id]])
            } 
        }else{
            setFavs([...favs, [movie.id]])
        }
        console.log(favs)
    }



    useEffect(() => {
        const ratingOfMovies = data.sort(function(a, b) {
            return a?.rating.imdb - b?.rating.imdb;
        }); 
        //let f = ratingOfMovies.filter((m, i) => m[i > 0]);
        //console.log(f);
        setPopularMovies(ratingOfMovies);

    }, [])

    console.log(popularMovies)
//  {f = data.findIndex((m) => (m.id === popularMovies[0].id))}

    if( navigation === 'loading'){
        return <h1>Loading...</h1>
    }
    return ( 
        <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4}}
            className={styles.popular}
        >
            {popularMovies && popularMovies.length > 0 ?
                <div className={styles.popularBlock}
                     style={{ backgroundImage: `url(${popularMovies[0].poster.url})` }}>
                    <div>NEW</div>
                        <h1>{popularMovies[0].name}</h1>
                        <div className={styles.rate}>
                            <span><i className='bx bxl-imdb bx-md'></i>{popularMovies[0].rating.imdb}</span>
                            <span>{ popularMovies[0].language ?  popularMovies[0].language : 'English'}</span>
                        </div>

                        <Link to={"/" + 0 }>
                            <motion.button 
                                initial={{ scale: 1}}
                                whileHover={{ scale: 1.1}}
                                whileTap={{ backgroundColor: '#600a0a'}}
                            >Watch
                            </motion.button>
                        </Link>
                    </div>
           
                
            : ''
            }
            <h2>Top rated</h2>
                <div className={styles.trendWrapper}>
                <Swiper 
                    breakpoints={{
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                  }}
                    modules={[ Navigation, Mousewheel ]}
                                    spaceBetween={35}
                                    slidesPerView={3}
                                    navigation
                                    mousewheel
                                            
                >
                    {popularMovies.length > 0 
                    ?
                    popularMovies.map((movie, i) => {
                            return <SwiperSlide 
                                        key={movie.id} 
                                        className={styles.trendItem} 
                                        style={{ backgroundImage: `url(${movie.poster.url})` }}>
                                                <span className={styles.trendRate}><i className='bx bxs-star bx-xs'></i>{popularMovies[0].rating.imdb}</span>
                                                <Link to={"/" + i}>
                                                    
                                                    {movie.name}
                                                    {/* {movie.alternativeName ? movie.alternativeName : movie.name} */}
                                                </Link>  
                                                <span className={styles.year}>{movie.year}</span>
                                                <button onClick={() => toggleFav(movie)}>
                                                    {favs && favs.length > 0 && favs.some((item, i) => item[0] === movie.id ) 
                                                    ?  <i className='bx bxs-bookmark-minus bx-sm'></i>
                                                    :  <i className='bx bx-bookmark-plus bx-sm'></i>
                                                    }
                                                </button>
                                        </SwiperSlide>
                    })
                    :
                    ''                   
                    }
                </Swiper>
                </div>

        </motion.div>
     );
}
 
export default Popular;