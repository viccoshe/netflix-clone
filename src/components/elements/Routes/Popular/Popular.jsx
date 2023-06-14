import { useEffect, useState, useParams } from "react";
import styles from "./Popular.module.scss";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import { toggleFavourites } from "../../../../utiles";
import { motion } from "framer-motion";
import "swiper/scss";
import "swiper/scss/navigation";
import {ReactComponent as Loader} from './../../../../images/Loader.svg';

const Popular = () => {
    const data = useLoaderData();
    const  [popularMovies, setPopularMovies ] = useState([]);
    const navigation = useNavigation();
    
    const [ favs, setFavs ] = useState(
        JSON.parse(localStorage.getItem('favourites')) 
        ? JSON.parse(localStorage.getItem('favourites')) 
        : []
    );

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
        console.log(data)
       //const ratingOfMovies = data.toSorted((a, b) => b?.rating?.imdb - a?.rating?.imdb); 
       const ratingOfMovies = data.sort((a, b) => b?.rating?.imdb - a?.rating?.imdb); 
        console.log(ratingOfMovies);
        console.log(data)
        setPopularMovies(ratingOfMovies);

    }, [])

    let f;

    if( navigation === 'loading'){
        return  <Loader/>
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
                     style={{ backgroundImage: `url(${popularMovies[9].poster.url})` }}>
                    <div>NEW</div>
                    <img className={styles.img} src={popularMovies[9].logo.url}></img>
                        <div className={styles.rate}>
                            <span><i className='bx bxl-imdb'></i>{popularMovies[9].rating.imdb}</span>
                            <span>{ popularMovies[9].language ?  popularMovies[9].language : 'English'}</span>
                        </div>

                        <Link to={"/" + 3}>
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
                    modules={[ Navigation, Mousewheel ]}
                                    spaceBetween={35}
                                    slidesPerView={3}
                                    navigation
                                    mousewheel
                                    breakpoints={{
                                        1152: {
                                            slidesPerView: 3,
                                        },
                                        800: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        425: {
                                            slidesPerView: 2,
                                        },
                                        480: {
                                            slidesPerView: 2,
                                        },
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        0: {
                                            slidesPerView: 1,
                                        },
                    }}                         
                >
                    {popularMovies.length > 0 
                    ?
                    popularMovies.map((movie) => {
                            return <SwiperSlide 
                                        key={movie.id} 
                                        className={styles.trendItem} 
                                        style={{ backgroundImage: `url(${movie.poster.url})` }}>
                                                <span className={styles.trendRate}>
                                                    <i className='bx bxs-star bx-xs'></i>{popularMovies[0].rating.imdb}
                                                </span>
                                                {f = data.findIndex((film) => film === movie)}
                                                <Link to={"/" + f}>
                                                    {movie.name}
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