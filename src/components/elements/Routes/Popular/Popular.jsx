import { useEffect, useState, useParams } from "react";
import styles from "./Popular.module.scss";
import { DataContext } from "../../../../App";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import {DATA} from "../../../../data";
import Button from "../../../UI/Button/Button";
import { Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import { addToFavourites, toggleFavourites } from "../../../../utiles";
import { motion } from "framer-motion";


const Popular = () => {
    const  [popularMovies, setPopularMovies ] = useState([]);
    const navigation = useNavigation();
    const [ favs, setFavs ] = useState(JSON.parse(localStorage.getItem('favourites')));

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
    //const data = useLoaderData();
    let data = DATA;

    useEffect(() => {
        const ratingOfMovies = data.sort(function(a, b) {
            return a?.rating - b?.rating;
        }); 
        setPopularMovies(ratingOfMovies);
    }, [])


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
            {popularMovies.length > 0 ?
                <div className={styles.popularBlock}
                     style={{ backgroundImage: `url(${popularMovies[0].mainImage})` }}>
                    <div>NEW</div>
                        <h1>{popularMovies[0].name}</h1>
                        <div className={styles.rate}>
                            <span><i className='bx bxl-imdb bx-md'></i>{popularMovies[0].rating}</span>
                            <span>{ popularMovies[0].language ?  popularMovies[0].language : 'English'}</span>
                        </div>
                        {console.log(popularMovies[0]) }

                        <Link to={"/" + 0 }>
                            <motion.button 
                                initial={{ scale: 1}}
                                whileHover={{ scale: 1.1}}
                                whileTap={{ backgroundColor: '#600a0a'}}
                            >Watch</motion.button>
                        </Link>
                    </div>
           
                
            : ''
            }
            <h2>Top rated</h2>
                <div className={styles.trendWrapper}>
                <Swiper modules={[Navigation, Mousewheel]}
                                            spaceBetween={35}
                                            slidesPerView={4}
                                            navigation
                                            mousewheel
                                            
                >
                    {popularMovies.length > 0 
                    ?
                    popularMovies.map((movie, i) => {
                            return <SwiperSlide 
                                        key={movie.id} 
                                        className={styles.trendItem} 
                                        style={{ backgroundImage: `url(${movie.mainImage})` }}>
                                                <span className={styles.trendRate}><i className='bx bxs-star bx-xs'></i>{popularMovies[0].rating}</span>
                                                <Link to={"/" + i}>
                                                     {movie.alternativeName ? movie.alternativeName : movie.name}
                                                </Link>  
                                                <span className={styles.year}>{movie.year}</span>
                                                <button onClick={() => toggleFav(movie)}>
                                                    {favs && favs.length > 0 && favs.some((item, i) => item[0] === movie.id ) 
                                                    ?  <i className='bx bxs-bookmark-minus bx-sm'></i>
                                                    :  <i className='bx bx-bookmark-plus bx-sm'></i>
                                                    }
                                                </button>
                                        </SwiperSlide>
                                    
                            
                            
                            
                            
                                    // <li key={movie.id}>
                                    //     <Link to={"/" + i}>
                                    //         {movie.alternativeName ? movie.alternativeName : movie.name}
                                    //     </Link>   
                                    // </li>
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