import styles from './Search.module.scss';
import { DATA } from '../../../data';

const Search = ({ query, setQuery }) => {
    const data = DATA;

    return ( 
        <>
        <div className={styles.search}>
            <div>
                <i className='bx bx-search-alt'></i>
                <input 
                    type="text" 
                    placeholder='I`m searching for...'
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <i className='bx bx-customize'></i>
        </div>
        </>
        
    );
}
 
export default Search;