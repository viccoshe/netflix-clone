import { useState } from "react";
import SignUp from "../SignUp/SignUp";
import styles from "./Login.module.scss";
import { singInUser, signOutUser, logInViaGoogle }from "./../../../utiles/index";
import { motion } from "framer-motion";
import { useNavigation } from "react-router-dom";
import {ReactComponent as Loader} from "./../../../images/Loader.svg";


const Login = ({ signUp, setSignUp, loginWindow, setLoginWindow}) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigation = useNavigation();

    const logInNewUser = (e) => {
        e.preventDefault();
        singInUser(email, password);
        setLoginWindow(!loginWindow);
    }

    if( navigation === 'loading'){
        return  <Loader/>
    }
    return ( 
        <motion.div className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.login}>
                <i  
                    onClick={() => setLoginWindow(!loginWindow)}
                    className='bx bx-x' 
                    >
                
                </i>

                {!signUp 
                ?
                    <motion.div 
                        className={styles.form}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Welcome back</h2>
                        <form onSubmit={logInNewUser}>
                            <label>Email</label>
                            <input 
                                onChange={ (e) => setEmail(e.target.value) }
                                type="email" 
                                placeholder="Enter your email" 
                            />
                            <label>Password</label>
                            <input 
                                onChange={ (e) => setPassword(e.target.value) } 
                                type="password" 
                                placeholder="Enter your password" 
                            />
                            <div className={styles.newAccBtns}>
                                <span>New to <b>Netflix?</b></span>
                                <div 
                                    onClick={() => setSignUp(!signUp)}>Create an account.</div> 
                            </div>  
                            <button className={styles.signInBtn} type="submit">Sign In</button>
                        </form>
                    </motion.div>   
                :
                <SignUp signUp={signUp} 
                        setSignUp={setSignUp}
                        loginWindow={loginWindow}
                        setLoginWindow={setLoginWindow}
                />
                }
                <button 
                    className={styles.googleBtn} 
                    onClick={logInViaGoogle} 
                    type="submit">
                        <i className='bx bxl-google bx-sm'></i>
                        Sign in with Google
                </button>
                {/* <Button cb={ () => signOutUser() } style={{border: "1px solid red"}}>LOG OUT</Button> */}
            </div>            
        </motion.div>

     );
}
 
export default Login;