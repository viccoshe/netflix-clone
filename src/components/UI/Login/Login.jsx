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
                        <h5>Log In</h5>
                        <form onSubmit={logInNewUser}>
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
                            <Button type="submit"> Log IN</Button>
                        <span>Haven't got acc?</span>s
                        </form>
                        <Button cb={() => setSignUp(!signUp)}> SIGN UP</Button>
                    </div>   
                :
                <SignUp signUp={signUp} 
                        setSignUp={setSignUp}
                />
                }
                <span>or via Google</span>
                <button onClick={logInViaGoogle} type="submit">Login via Google</button>
                <Button cb={ () => signOutUser() } style={{border: "1px solid red"}}>LOG OUT</Button>
            </div>            
        </div>

     );
}
 
export default Login;