import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const menu = ['Popular', 'Films', 'Watchlist'];

const Sidebar = ({ data, isSidebarShow, setIsSidebarShow }) => {
    return ( 
        <div 
            className={styles.sidebar} 
            style={{ width: isSidebarShow ? '15%' : '10%' }}
        >
            <button onClick={() => setIsSidebarShow(!isSidebarShow)}>
                <i className={`bx bx-${isSidebarShow ? 'x' : 'align-left'}`}></i>
            </button>
            <ul
                className={isSidebarShow ? styles.show : ''}>
                {menu.map((title, i) => (title === "Popular" 
                    ? <li key={i}><Link>{title}</Link></li> 
                    : <li key={title}>
                        <Link to={"/" + title.toLowerCase().replace(/\s/g, '')}>
                            {title}
                        </Link> 
                    </li>
                ))}  
                <li><Link to={'/' + Math.floor(Math.random() * data?.length)}>Random film</Link></li>        
            </ul>
        </div>
     );
}
 
export default Sidebar;