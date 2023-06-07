import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useState } from 'react';
import { signOutUser } from '../../../utiles';
import Button from '../../UI/Button/Button';

const Profile = ( { loginWindow, setLoginWindow, user, setUser }) => {
    const [activeDropdown, setActiveDropdown] = useState(false);

    return ( 
        <div className={styles['profile-wrapper']}>
            <div className={styles.notification}>
                <i className="bx bxs-bell">{user && user.notifications ? user.notifications : ''}</i>
                <span></span>
            </div>
            <div 
                className={styles.profile}
                onClick={() => setActiveDropdown(!activeDropdown)}
            >
                <div className={styles.avatar}>
                   {user
                    ? <img  style={{ width: '100%'}}  
                            src={user.photo} 
                            alt={user.name} 
                        />
                    :   <img  
                    style={{ width: '100%',
                        backgroundColor: '#9b9a97'
                            
                            }}
                            src="https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png" 
                            alt="avatar" 
                        />
                   }
                    
                </div>
                {activeDropdown ? <i className="bx bx-caret-down"></i> : <i className="bx bx-caret-up"></i>}
                {activeDropdown ?
                    <div className={styles.dropdown}>
                        {user && user !== null
                        ?  <>
                            <Link to="/watchlist">Watchlist</Link>
                            <button onClick={ () => signOutUser()}>Sign out</button>
                            </>
                        :
                            <>
                                <button onClick={ () => setLoginWindow(!loginWindow)}>Log In</button>
                                <Link to="/watchlist">Watchlist</Link>                  
                            </>
                        }

                    </div>
                :   null
                }
            </div>
        </div>
    );
}
 
export default Profile;