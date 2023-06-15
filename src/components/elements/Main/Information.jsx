import styles from './Main.module.scss';
import Button from '../../UI/Button/Button';
import { addToFavourites } from '../../../utiles';
import { motion } from 'framer-motion';


const Information = ({ movie, openVideo, setOpenVideo }) => {
    const { alternativeName: name, 
            shortDescription: desc, id, genres, logo, limitAge, rating: rate, poster, filmLength, year } = movie;

    const bratStyles = {
        width: '20%',
    }

    const intouchStyles = {
        width: '20%',
    }

    console.log(movie);
    return ( 
    <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4}}
        className={styles.info}>
        <img 
            style={ movie.name === 'Брат' ? {width: bratStyles.width} : movie.name === '1+1' ? {width: intouchStyles.width}  : {width: '50%', margin: '3rem 0'} }
            src={logo.url}
        >
        </img>

        <div className={styles.additional}>
            <span>{year}</span>
            <span className={styles.age}>{limitAge ? limitAge : "6+"}</span>
            <span>{rate.imdb}</span>
            <span>{filmLength}</span>
        </div>

        <div className={styles.description}>{desc}</div>

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