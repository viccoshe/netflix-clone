import Button from "../Button/Button";
import { registerUser } from "../../../utiles";
import { useState } from "react";
import styles from "./../Login/Login.module.scss";
import { motion } from "framer-motion";

const SignUp = ({  signUp, setSignUp, loginWindow, setLoginWindow}) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    const signUpNewUser = (e) => {
        e.preventDefault();
        registerUser(email, password);
        setLoginWindow(!loginWindow);
    }

    return (
        <div>
            <motion.div 
                className={styles.form}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2>Sign Up</h2>
                <form onSubmit={signUpNewUser}>
                    <label>Email</label>
                    <input 
                        onChange={ (e) => setEmail(e.target.value) }
                        type="email" 
                        placeholder="Your email" 
                    />
                    <label>Password</label>
                    <input 
                        onChange={ (e) => setPassword(e.target.value) } 
                        type="password" 
                        placeholder="Your password" 
                    />
                    <button type="submit" className={styles.signInBtn}>Sign Up</button>
                    <div className={styles.newAccBtns}>
                        <span>Already have got an account?</span>
                        <div onClick={() => setSignUp(!signUp)}>Log in</div>                    
                    </div>

                </form>
            </motion.div>   
            
        </div>
     );
}
 
export default SignUp;