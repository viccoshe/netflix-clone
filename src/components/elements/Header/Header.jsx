import Search from "../../UI/Search/Search";
import styles from "./Header.module.scss";
import Profile from "./Profile";
import { DATA } from '../../../data';
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ( {user, setUser, loginWindow, setLoginWindow }) => {
    const data = DATA;
    const [ query, setQuery ] = useState('');
    
    return (
        <>
            <div className={styles.header}>
                <div>
                <a href='/'>
                    <img 
                        src="https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png" 
                        alt="Netflix" 
                        height='70'
                        wigth='112'
                    />
                </a>
                <Search query={ query } setQuery={ setQuery }/>                 
                </div>
                <Profile 
                    loginWindow={loginWindow} 
                    setLoginWindow={setLoginWindow}
                    user={user} 
                    setuser={setUser}
                    
                 />      
            </div>  
            
                {query
                ?
                <motion.div 
                    className={styles.query}
                    initial={{ scale: 0}}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    animate={{ boxShadow: "3px 1px 58px 14px rgba(0, 0, 0, 0.215)" }}
                >
                    <ul>
                    {data.some((m) => m.name.toLowerCase().includes(query))
                    ?
                        data.filter((movie) => 
                            movie.name.toLowerCase().includes(query) 
                                ).map((movie, i) => (
                                    <li key={i}>
                                        <Link  to={"/" + i}>
                                            <span>{movie.name}</span>
                                            <span>{movie.year}</span>
                                        </Link>
                                    </li>
                                ))                                  
                        : <li>No such results</li>}
                    </ul>
                </motion.div> 
                :
                '' }  
            
    
        </>


    )
}
 
export default Header;