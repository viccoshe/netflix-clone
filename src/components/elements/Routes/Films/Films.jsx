import { Link, useLoaderData } from "react-router-dom";
import styles from "./Films.module.scss";
import { Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/mousewheel';
import { motion } from "framer-motion";

const Films = () => {
    const data = useLoaderData();

    const genres = ['Драма', 
                    'Боевик',
                    'Криминал', 
                    'Комедия', 
                    ];

    return ( 
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4}}
        >
            <h1>Trending movies</h1>
            <div className={styles.filmsWrapper}>
                {genres.length && genres.map((gen, i) => {
                    return <div key={gen.i} className={styles.filmsCategory}>
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
                                            if(movie.genres.some((item) => item.name === gen.toLowerCase())){
                                                return <SwiperSlide  
                                                            className={styles.filmItem}
                                                            style={{ backgroundImage: `url(${movie.poster.url})`}}
                                                            key={movie.id}
                                                        >
                                                            <Link to={"/" + i}>
                                                                {movie.name}
                                                                {/* {movie.alternativeName ? movie.alternativeName : movie.name} */}
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
        </motion.div>
     );
}
 
export default Films;