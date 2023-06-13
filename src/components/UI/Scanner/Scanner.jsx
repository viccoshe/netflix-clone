import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Scanner.module.scss";
import { motion } from "framer-motion";

const Scanner = ({ isScanShow, setIsScanShow }) => {
    const [ scanResult, setScanResult ] = useState(null);
    const navigate = useNavigate();

    useEffect(() =>{
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        });

        scanner.render(success, error);

        function success(result) {
            scanner.clear();
            setScanResult(result);
        }

        function error(err) {
            console.warn(err);
        }

    }, [])


    return ( 
        <div 
            className={styles.modal}
        >
             <motion.div
                 className={styles.scanner}
                 initial={{ opacity: 0}}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.4}}
            >
                <i  
                    onClick={() => setIsScanShow(!isScanShow)}
                    className='bx bx-x' 
                    style={{ color: '#9b9a97', fontSize: '36px' }}>
                </i>
                <h1>Scan QR-code</h1> 

                {scanResult 
                ? <div className={styles.linkBox}>Open the link <a href={scanResult}>{scanResult}</a></div>
                
                :  <div id="reader"></div>
                }
             </motion.div> 

        </div>
    );
}
 
export default Scanner;