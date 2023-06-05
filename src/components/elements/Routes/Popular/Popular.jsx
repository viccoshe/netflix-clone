import { useEffect, useState, useParams } from "react";
import styles from "./Popular.module.scss";
import { DataContext } from "../../../../App";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import {DATA} from "../../../../data";
import Button from "../../../UI/Button/Button";
import { Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';


const Popular = () => {
    const  [popularMovies, setPopularMovies ] = useState([]);
    const navigation = useNavigation();
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
        <div className={styles.popular}>
            {popularMovies.length > 0 ?
                <div className={styles.popularBlock}
                     style={{ backgroundImage: `url(${popularMovies[0].mainImage})` }}>
                    <div>
                        <div>NEW</div>
                        <h1>{popularMovies[0].name}</h1>
                        <div className={styles.rate}>
                            <span><i className='bx bxl-imdb bx-md'></i>{popularMovies[0].rating}</span>
                            <span>{ popularMovies[0].language ?  popularMovies[0].language : 'English'}</span>
                        </div>
                        {console.log(popularMovies[0]) }

                        <Button> 
                            <Link to={"/" + 0 }>Watch</Link>
                        </Button>
                    </div>
                </div>
            : ''
            }
            <h1>Top rated</h1>
                <div className={styles.trendWrapper}>
                <Swiper modules={[Navigation, Mousewheel]}
                                            spaceBetween={50}
                                            slidesPerView={4}
                                            navigation
                                            mousewheel
                                    >
                    {popularMovies.length > 0 
                    ?
                    popularMovies.map((movie, i) => {
                            return <div 
                                        className={styles.trendItem} 
                                        style={{ backgroundImage: `url(${movie.mainImage})` }}>
                                    <SwiperSlide>
                                            <img 
                                                key={movie.id} 
                                                style={{ width: '100%', borderRadius: '2%'}} 
                                                src={movie.mainImage} 
                                                alt={movie.name}>
                                            </img>
                                            <span><i className='bx bxl-imdb bx-md'></i>{popularMovies[0].rating}</span>
                                            <h6>{movie.name}</h6>
                                            <span>{movie.rate}</span>
                                            <button><i className='bx bx-bookmark-plus bx-md'></i></button>
                                    </SwiperSlide>

                                    

                                    </div>
                            
                            
                            
                            
                                    // <li key={movie.id}>
                                    //     <Link to={"/" + i}>
                                    //         {movie.alternativeName ? movie.alternativeName : movie.name}
                                    //     </Link>   
                                    // </li>
                    })
                    :
                    <li>There is no such thing as popular</li>                   
                    }
                </Swiper>
                </div>

        </div>
     );
}
 
export default Popular;