import { useEffect, useState, useParams } from "react";
import styles from "./Popular.module.scss";
import { DataContext } from "../../../../App";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import {DATA} from "../../../../data";


const Popular = () => {
    const  [popularMovies, setPopularMovies ] = useState([]);
    const navigation = useNavigation();
    //const data = useLoaderData();
    let data = DATA;

    useEffect(() => {
        const ratingOfMovies = data.sort(function(a, b) {
            return a?.rating - b?.rating;
        }); 
        setPopularMovies(ratingOfMovies);
    }, [])

    if( navigation === 'loading'){
        return <h1>Loading...</h1>
    }
    return ( 
        <div className={styles.popular}>
            <h1>Popular</h1>
                <ul>
                    {popularMovies.length > 0 
                    ?
                    popularMovies.map((movie, i) => {
                            return <li key={movie.id}>
                                        <Link to={"/" + i}>
                                            {movie.alternativeName ? movie.alternativeName : movie.name}
                                        </Link>   
                                    </li>
                    })
                    :
                    <li>There is no such thing as popular</li>                   
                    }
                </ul>

        </div>
     );
}
 
export default Popular;