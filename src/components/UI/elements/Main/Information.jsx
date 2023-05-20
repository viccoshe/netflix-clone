import styles from './Main.module.scss';

const Information = ({ movie }) => {

    const addToFavourite = ( movieName ) => {
        let favourites = localStorage.getItem('favourites');

        if(favourites){
            favourites = JSON.parse(favourites);
            localStorage.setItem('favMovies', movieName); //localStorage.getItem('favMovies')
            alert(`${movieName} is in your Favourites now!`)            
        }

    }
    return ( 
    <div className={styles.info}>
        <img scr={movie.logo} alt={movie.name} width='200' />
        <div className={styles.adiitional}>
            <span>{movie.year}</span>
            <span>{movie.limitAge}</span>
            <span>{movie.rating}</span>
            <span>{movie.duration}</span>
        </div>

        <div className={styles.description}>{movie.description}</div>

        <div className={styles.buttons}>
        {/* <Button cb={() => setModuleShow(true)}>  */}
            <Button cb={() => console.log('video is opened')}> 
                <i className="bx-play"></i>
                <span>My list</span>
            </Button>
            <Button cb={addToFavourite(true)}> 
                <i className="bx-play"></i>
                <span>My list</span>
            </Button>
        </div>

    </div>);
}
 
export default Information;