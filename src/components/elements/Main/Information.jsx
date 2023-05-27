import styles from './Main.module.scss';
import Button from '../../UI/Button/Button';
import VideoPlayer from '../../UI/VideoPlayer/VideoPlayer';
import { useState } from "react";

const Information = ({ movie, openVideo, setOpenVideo }) => {

    const addToFavourites = ( movieName ) => {
        let favourites = localStorage.getItem('favourites');

        if(favourites){
            favourites = JSON.parse(favourites);
            // favourites.forEach((movie, i) => {
            //     if(movie === movieName)
            //     return
            // })
            localStorage.setItem('favourites', [...favourites, movie.name]); 
            alert(`${movie.name} is in your Favourites now!`)            
        }else{
            favourites = JSON.stringify(movie.name);
            localStorage.setItem('favourites', [favourites]); 
            alert(`${movie.name} is in your Favourites now!`)   
        }
    }


    return ( 
    <div className={styles.info}>
			<img
				src={movie.logo}
				alt={movie.name}
				width='270'
				style={{ opacity: 0.7 }}
			/>
        <div className={styles.additional}>
            <span>{movie.year}</span>
            <span className={styles.age}>{movie.limitAge}</span>
            <span>{movie.rating}</span>
            <span>{movie.duration}</span>
        </div>

        <div className={styles.description}>{movie.description}</div>

        <div className={styles.buttons}>    
            <Button cb={() => setOpenVideo(!openVideo)}>
                {openVideo ? console.log('inf') : console.log('not info')}
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