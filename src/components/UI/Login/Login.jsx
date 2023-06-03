import { useState } from "react";
import SignUp from "../SignUp/SignUp";
import styles from "./Login.module.scss";
import Button from "../Button/Button";
import { singInUser, signOutUser, logInViaGoogle }from "./../../../utiles/index";


const Login = ({ signUp, setSignUp, loginWindow, setLoginWindow}) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const logInNewUser = (e) => {
        e.preventDefault();
        singInUser(email, password);
        setLoginWindow(!loginWindow);
    }

    return ( 
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <i  
                    onClick={() => setLoginWindow(!loginWindow)}
                    className='bx bx-x' 
                    style={{ color: '#9b9a97', fontSize: '36px' }}>
                
                </i>

                {!signUp 
                ?
                    <div className={styles.form}>
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
                                <div onClick={() => setSignUp(!signUp)}>Create an account.</div> 
                            </div>  


                            <button 
                                className={styles.signInBtn} 
                                type="submit">
                                    Sign In
                            </button>
                        </form>
                        
                    </div>   
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
        </div>

     );
}
 
export default Login;