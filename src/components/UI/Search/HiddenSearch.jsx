import styles from "./HiddenSearch.module.scss";
import { motion } from "framer-motion";

const HiddenSearch = ({ hiddenSearch, setHiddenSearch, setQuery }) => {
    return ( 
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={styles.hiddenSearch}>
            <form onSubmit={() => {setHiddenSearch(!hiddenSearch)}}>
                <input 
                    type="text" 
                    placeholder='I`m searching for...'
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className={styles.btn} type="submit"><i className='bx bx-search-alt'></i></button>
            </form>
    </motion.div>
    );
}
 
export default HiddenSearch;