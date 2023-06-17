import styles from "./../Main.module.scss";
import { Swiper, SwiperSlide, useSwiperSlide, useSwiper} from 'swiper/react';
import { Navigation, Mousewheel} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/mousewheel';
import { DATA} from "./../../../../data";
import { useState } from "react";
import ModalImage from "../../../UI/ModalImage/ModalImage";
import { motion } from "framer-motion";

const Episodes = ({ movie} ) => {
    const [ popup, setPopup ] = useState(false);
    const [ photoUrl, setPhotoUrl ] = useState('');

    const swiperSlide = useSwiperSlide();
    const swiper = useSwiper();

    const getPopup = ( photo ) => {
        setPhotoUrl(photo);
        setPopup(!popup);
    }

    return (
        <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4}}
            className={styles.episodes}
        >
             <img 
                style={ movie?.name === 'Брат' ? {width: '29%'} : movie?.name === '1+1' ? {width:'23%'}  : {width: '60%', margin: '3rem 0'}}
                className={styles.img} 
                src={movie?.logo.url}
            >
            </img>
             <span className={styles.year}>{movie?.year}</span>
             <div className={styles.rate}>
                {movie?.rating.imbd ? <span><i className='bx bxl-imdb'></i>{movie.rating.imbd}</span> : ''}
                {movie?.rating.kp ? <span><i className='bx bxs-film'></i>{movie.rating.kp}</span> : ''}
                {movie?.rating.filmCritics ? <span><i className='bx bxs-color'></i>{movie.rating.filmCritics}</span> : ''}
            </div>
            {/* <select className={styles.stream}>
                    {movie.watchability.items && movie?.watchability?.items.map(stream => (
                            <option key={stream.name} value={`${stream.name}`}>{stream.name}</option>
                        ))
                </select> */}
            <div className={styles.countries}>
                {movie.countries && movie.countries.map(c => {
                    return <span>{c?.name}</span>
                })}
            </div>

            <div className={styles.swiper}>
            <Swiper
                    modules={[Navigation, Mousewheel]}
                    spaceBetween={50}
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
                        570: {
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
                        {movie?.photos
                        ?
                        movie.photos.map((photo, id) =>(
                            <SwiperSlide 
                                key={id}>
                                <div onClick={() => getPopup(photo)} 
                                     className={styles.episodeItem}
                                >
                                    <img 
                                        style={{ width: '100%', borderRadius: '2%'}} 
                                        src={photo} 
                                        alt={movie?.name}>
                                    </img>
                                    <div className={styles.number}>{(++id).toString()}</div>
                                </div>
                            </SwiperSlide>
                        ))
                        : 
                        DATA[0].photos.map((photo, id) =>(
                            <SwiperSlide 
                                key={id}>
                                <div onClick={() => getPopup(photo)} 
                                    className={styles.episodeItem}
                                >
                                    <img 
                                        style={{ width: '100%', borderRadius: '2%'}} 
                                        src={photo} 
                                        alt={movie?.name}>
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
        </motion.div>
     );
}
 
export default Episodes;