import { useEffect } from "react";
import styles from "./Modalimage.module.scss";

const ModalImage = ({ popup, setPopup, photoUrl}) => {

    useEffect(() => {
        if(setPopup){
            setPopup(popup);
        }
    }, [popup])
    
    return ( 
        <>
            <div 
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
            </div>
        </>
     );
}
 
export default ModalImage;