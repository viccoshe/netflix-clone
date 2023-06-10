import styles from './Search.module.scss';

const Search = ({ query, setQuery }) => {

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