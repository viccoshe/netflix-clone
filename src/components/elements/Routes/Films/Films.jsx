import { Link } from "react-router-dom";
import { DATA } from "./../../../../data.js";
import styles from "./Films.module.scss";
import { Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/mousewheel';

const Films = () => {
    let data = DATA;

    const genres = ['Комедия', 
                    'Криминал', 
                    'Драма', 
                    'Триллер', 
                    'Биография', 
                    'Боевик', 
                    'Фантастика', 
                    'Детектив', 
                    'Фентези',
                    'action'];

    return ( 
        <>
            <h1>Trending movies</h1>
            <div className={styles.filmsWrapper}>
                {genres.length && genres.map((gen) => {
                    return <div className={styles.filmsCategory}>
                            <div className={styles.catBlock}>
                                <h4>{gen}</h4>
                
                                    <Swiper 
                                            modules={[Navigation, Mousewheel]}
                                            spaceBetween={40}
                                            slidesPerView={4}
                                            navigation
                                            mousewheel
                                    >
                                        {data.map((movie, i) => {
                                            if(movie.genres.some((item) => item === gen.toLowerCase())){
                                                return <SwiperSlide  className={styles.filmItem}
                                                                    style={{ backgroundImage: `url(${movie.mainImage})`}}
                                                                    key={movie.id}
                                                        >
                                                            <Link to={"/" + i}>
                                                                    {movie.alternativeName ? movie.alternativeName : movie.name}
                                                            </Link>  
                                                            <span>{movie.year}</span>    
                                                        </SwiperSlide>  
                                            }
                                        })}  
                                    </Swiper>
                                </div>
                            </div>
                })}
            </div>
        </>
     );
}
 
export default Films;