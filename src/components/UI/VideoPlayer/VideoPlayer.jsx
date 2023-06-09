import { useEffect } from "react";
import styles from "../../elements/Main/Main.module.scss";
import { motion } from "framer-motion";

const VideoPlayer = ( {movie, openVideo, setOpenVideo} ) => {

    useEffect(() => {
        if(openVideo){
            setOpenVideo(openVideo);
        }
    }, [openVideo])
    
    return ( 
        <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4}}
            className={styles.modal}
            onClick={() => setOpenVideo(!openVideo)}
        >
            <div className={styles.video}
                onClick={(e) => e.stopPropagation()}    
            >
            <i  
                onClick={() => setOpenVideo(!openVideo)}
                className='bx bx-x' 
                style={{ color: '#9b9a97', fontSize: '36px' }}>
            
            </i>

            <iframe src={movie.trailer ? movie.trailer : "https://www.youtube.com/embed/6ZfuNTqbHE8"} title="YouTube video player" frameBBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
        </motion.div>
     );
}
 
export default VideoPlayer;