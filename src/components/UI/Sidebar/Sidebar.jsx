import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import Popular from "../../elements/Routes/Popular/Popular";
import Films from "../../elements/Routes/Films/Films";
import Watchlist from "../../elements/Routes/Watchlist/Watchlist";
import TvShows from "../../elements/Routes/TvShows/TvShows";
import { motion } from "framer-motion";

const menu = ['Popular', 'Films', 'Watchlist'];

const Sidebar = ({ isSidebarShow, setIsSidebarShow  }) => {
    return ( 
        <div 
            className={styles.sidebar} 
            style={{ width: isSidebarShow ? '15%' : '10%' }}
        >
            <button onClick={() => setIsSidebarShow(!isSidebarShow)}>
                <i className={`bx bx-${isSidebarShow ? 'x' : 'align-left'}`}></i>
            </button>
            <ul className={isSidebarShow ? styles.show : ''}>
                {menu.map((title, i) => (title === "Popular" 
                    ? <li key={i}><Link>{title}</Link></li> 
                    : <li key={title}>
                        <Link to={"/" + title.toLowerCase().replace(/\s/g, '')}>
                            {title}
                        </Link> 
                    </li>
                ))}             
            </ul>
        </div>
     );
}
 
export default Sidebar;