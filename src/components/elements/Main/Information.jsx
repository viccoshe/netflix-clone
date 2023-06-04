import styles from './Main.module.scss';
import Button from '../../UI/Button/Button';


const Information = ({ movie, openVideo, setOpenVideo }) => {
    const { alternativeName: name, 
            shortDescription: desc, 
        id, genres, logo, limitAge, rating: rate, poster, filmLength, year } = movie;

    const addToFavourites = ( movieName ) => {
        let favourites = JSON.parse(localStorage.getItem('favourites'));
        if(favourites && favourites.length > 0){
            if(favourites.some((item, i) => item[0] === id)){
                alert(`"${movie.name}" is already in your watchlist!`)
            }else{
                localStorage.setItem('favourites', JSON.stringify([...favourites, [id]])); 
                alert(`"${movie.name}" is in your watchlist now!`)    
            }
        }else{
            localStorage.setItem('favourites', JSON.stringify([[id]])); 
            alert(`"${movie.name}" is in your watchlist now!`)   
        }
    }

    return ( 
    <div className={styles.info}>
        <h1>{name}</h1>
			{/* <img найди лого
				src={logo}
				alt={name}
				width='270'
				style={{ opacity: 0.7 }}
			/> */}
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
            <Button cb={addToFavourites}>
                <i className='bx bx-plus'></i>
                <span>My list</span>
            </Button>
        </div>
    </div>);
}
 
export default Information;