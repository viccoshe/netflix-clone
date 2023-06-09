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

    const svgVariants = {
        hidden: { rotate: -180 },
        visible: {
            rotate: 0,
            transition: { duration: 1, delay: 1 }
        }
    }

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }
    
    return (
        <>
            <div className={styles.header}>
                <div>
                    <a href='/'>
                    <motion.svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1300.000000pt" height="1300.000000pt" viewBox="0 0 1300.000000 1300.000000" preserveAspectRatio="xMidYMid meet"
                        variants={ svgVariants }
                        initial= "hidden" 
                        animate= "visible"
                        whileHover={{ rotate: 180, transition: { duration: 1} }}
                    >
                        <g transform="translate(0.000000,1300.000000) scale(0.100000,-0.100000)"
                            fill="#700b0b" stroke="none">
                            <motion.path d="M4010 6490 l0 -4500 20 0 c11 0 161 16 333 35 493 54 859 84 1267
                            103 l155 7 5 1903 5 1904 669 -1894 c368 -1041 675 -1898 682 -1904 8 -6 92
                            -13 208 -17 327 -11 835 -52 1281 -103 121 -13 246 -27 278 -31 l57 -6 0 4502
                            0 4501 -887 -2 -888 -3 -5 -1971 -5 -1970 -689 1950 c-380 1073 -694 1961
                            -699 1974 l-10 22 -889 0 -888 0 0 -4500z"
                            variants={ pathVariants }/>
                        </g>
                    </motion.svg>
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