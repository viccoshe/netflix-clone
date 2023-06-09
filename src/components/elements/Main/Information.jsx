import styles from './Main.module.scss';
import Button from '../../UI/Button/Button';
import { addToFavourites } from '../../../utiles';
import { motion } from 'framer-motion';


const Information = ({ movie, openVideo, setOpenVideo }) => {

    return ( 
    <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4}}
        className={styles.info}>
        <img 
            style={movie?.name === 'Брат' || '1+1' ? {width: '20%'} : {width: '50%', margin: '3rem 0'}}
            src={movie?.logo.url}
        >
        </img>

        <div className={styles.additional}>
            <span>{movie?.year}</span>
            <span className={styles.age}>{movie?.limitAge ? movie?.limitAge : "6+"}</span>
            <span>{movie?.rating.imdb}</span>
            <span>{movie?.filmLength}</span>
        </div>

        <div className={styles.description}>{movie?.shortDescription}</div>

        <div className={styles.buttons}>    
            <Button cb={() => setOpenVideo(!openVideo)}>
                        <i className='bx bx-play' style={{ color: '#c62e21' }}></i>
                        <span>Play</span>
            </Button>
            <Button cb={() => addToFavourites(movie)}>
                <i className='bx bx-plus'></i>
                <span>My list</span>
            </Button>
        </div>
    </motion.div>);
}
 
export default Information;