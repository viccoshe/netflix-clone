import { Link, useLoaderData, useNavigation } from "react-router-dom";
import styles from "./Films.module.scss";
import { Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/mousewheel';
import { motion } from "framer-motion";
import {ReactComponent as Loader} from "./../../../../images/Loader.svg";

const Films = () => {
    const data = useLoaderData();
    const navigation = useNavigation();

    const genres = ['Драма', 
                    'Боевик',
                    'Криминал', 
                    'Комедия'];
                    
    if( navigation === 'loading'){
        return  <Loader/>
    }
    return ( 
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4}}
        >
            <h1>Trending films</h1>
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
                                            breakpoints={{
                                                1440: {
                                                    slidesPerView: 4,
                                                },
                                                1152: {
                                                    slidesPerView: 3,
                                                },
                                                800: {
                                                    slidesPerView: 2,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                420: {
                                                    slidesPerView: 2,
                                                },
                                                410: {
                                                    slidesPerView: 1,
                                                },
                                                320: {
                                                    slidesPerView: 1,
                                                },
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                            }} 
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