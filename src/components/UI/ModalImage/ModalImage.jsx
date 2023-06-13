import { useEffect } from "react";
import styles from "./Modalimage.module.scss";
import { motion } from "framer-motion";

const ModalImage = ({ popup, setPopup, photoUrl}) => {

    useEffect(() => {
        if(setPopup){
            setPopup(popup);
        }
    }, [popup])
    
    return ( 
        <div>
            <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4}}
                className={styles.modal}
                onClick={() => setPopup(!popup)}
            >
                <div className={styles.modalImage}
                    onClick={(e) => e.stopPropagation()}    
                >
                    <i  
                        onClick={() => setPopup(!popup)}
                        className='bx bx-x' 
                        style={{ color: '#9b9a97', fontSize: '36px' }}>
                    
                    </i>

                    <div className={styles.photo}>
                        <img src={photoUrl}/>
                    </div>
                </div>
            </motion.div>
        </div>
     );
}
 
export default ModalImage;