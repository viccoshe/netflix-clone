import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <>
            <div className={styles.footer}>
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix"/>
                <div className={styles.socials}>
                    <i className='bx bxl-twitter bx-lg'></i>
                    <i className='bx bxl-instagram bx-lg'></i>
                    <i className='bx bxl-facebook-square bx-lg' ></i>
                </div>
                <div>&#64; {year} NETFLIX</div>
            </div>
        
        </>
     );
}
 
export default Footer;