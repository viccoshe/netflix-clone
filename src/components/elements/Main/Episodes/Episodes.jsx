import styles from "./../Main.module.scss";
import { Swiper, SwiperSlide, useSwiperSlide, useSwiper} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/mousewheel';
import { DATA} from "./../../../../data";
import { useState } from "react";
import ModalImage from "../../../UI/ModalImage/ModalImage";

const Episodes = ( {movie} ) => {
    const [ popup, setPopup ] = useState(false);
    const [ photoUrl, setPhotoUrl ] = useState('');

    const swiperSlide = useSwiperSlide();
    const swiper = useSwiper();

    const getPopup = ( photo ) => {
        setPhotoUrl(photo);
        setPopup(!popup);
    }

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
                            <SwiperSlide key={id}>
                                <div onClick={() => getPopup(photo)} 
                                     className={styles.episodeItem}
                                >
                                    <img 
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
                            <SwiperSlide key={id}>
                                <div onClick={() => getPopup(photo)} 
                                    className={styles.episodeItem}
                                >
                                    <img 

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
            {popup  
            ? <ModalImage   popup={ popup } 
                            setPopup={ setPopup }
                            photoUrl={photoUrl} 
                />
            : ''}
        </div>
     );
}
 
export default Episodes;