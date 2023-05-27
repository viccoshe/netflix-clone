import { useEffect } from "react";
import styles from "../../elements/Main/Main.module.scss";

const VideoPlayer = ( {openVideo, setOpenVideo} ) => {

    useEffect(() => {
        if(openVideo){
            setOpenVideo(openVideo);
        }
    }, [openVideo])
    
    return ( 
        <div 
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

            <iframe src="https://www.youtube.com/embed/6ZfuNTqbHE8" title="YouTube video player" frameBBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
        </div>
     );
}
 
export default VideoPlayer;