import Search from "../../UI/Search/Search";
import styles from "./Header.module.scss";
import Profile from "./Profile"; 

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
            <a href='/'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                    alt="Netflix" 
                    height='35'
                    wigth='112'
                />
            </a>
            <Search />                 
            </div>
            <Profile/>      
        </div>

    )
}
 
export default Header;