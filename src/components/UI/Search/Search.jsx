import styles from './Search.module.scss';

const Search = ({ isScanShow, setIsScanShow, setQuery, hiddenSearch, setHiddenSearch }) => {


    return ( 
        <>
            <button
                className={styles.hiddenBtn} 
                onClick={() => setHiddenSearch(!hiddenSearch)}
            >
                <i className='bx bx-search-alt'>
                </i>
            </button>

            <div className={styles.search}>
                <div>
                    <i className='bx bx-search-alt'></i>
                    <input 
                        type="text" 
                        placeholder='I`m searching for...'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <button 
                    onClick={() => setIsScanShow(!isScanShow)}
                    style={{ border: 'none', backgroundColor: "transparent" }}>
                        <i className='bx bx-customize'></i>
                </button>
            </div>
        </>
        
    );
}
 
export default Search;