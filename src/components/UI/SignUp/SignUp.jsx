import Button from "../Button/Button";
import { registerUser } from "../../../utiles";
import { useState } from "react";
import styles from "./../Login/Login.module.scss"

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
            <div className={styles.form}>
                <h5>Sign Up</h5>
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
                    <p>or via Google</p>
                    <button type="submit">Sign Up</button>
                    
                <span>Already ave got an acc?</span>
                <button onClick={() => setSignUp(!signUp)}>Log in</button>
                </form>
                <Button cb={() => setSignUp(!signUp)}>Submit</Button>
            </div>   
            
        </div>
     );
}
 
export default SignUp;