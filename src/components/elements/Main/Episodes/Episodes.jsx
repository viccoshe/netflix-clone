import styles from "./../Main.module.scss";
import { Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/mousewheel';
import { DATA} from "./../../../../data";

const Episodes = ( {movie} ) => {

    const swiperSlide = useSwiperSlide();

    return (
        <div className={styles.episodes}>
             <h1>{movie.name}</h1>
            {/* <img className={styles.movieLogo}
                src={movie.logo}
                alt={movie.name}
                width='270'
                style={{ opacity: 0.7 }}
            /> */}

            <select className={styles.seasons}>
                {movie.seasons && movie?.seasons.map(season => (
                    <option key={season} value={`${season}`}>{season}</option>
                )) }
            </select>
            <div className={styles.swiper}>

            <Swiper
                modules={[Navigation, Mousewheel]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    mousewheel
                    >
                        {movie?.photos
                        
                        ?
                        movie.photos.map((photo, id) =>(
                            <SwiperSlide>
                                <div>
                                    <img 
                                        key={id} 
                                        style={{ width: '100%', borderRadius: '2%'}} 
                                        src={photo} 
                                        alt={movie.name}>
                                    </img>
                                    <div className={styles.number}>{(++id).toString()}</div>
                                </div>
                            </SwiperSlide>
                        ))
                        : 
                        DATA[0].photos.map((photo, id) =>(
                            <SwiperSlide>
                                <div>
                                    <img 
                                        key={id} 
                                        style={{ width: '100%', borderRadius: '2%'}} 
                                        src={photo} 
                                        alt={movie.name}>
                                    </img>
                                    <div className={styles.number}>{(++id).toString()}</div>
                                </div>
                            </SwiperSlide>
                        ))
                    }      
            </Swiper>
            </div>
            
        </div>
     );
}
 
export default Episodes;