import styles from './Header.module.scss';
import { useState } from 'react';

const Profile = () => {
    const [activeDropdown, setActiveDropdown] = useState(false);

    return ( 
        <div className={styles['profile-wrapper']}>
            <div className={styles.notification}>
                <i className="bx bxs-bell"></i>
                <span></span>
            </div>
            <div 
                className={styles.profile}
                onClick={() => setActiveDropdown(!activeDropdown)}
            >
                <div className={styles.avatar}>
                    <img  
                        src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50'" 
                        alt="" />
                </div>
                {activeDropdown ? <i className="bx bx-caret-down"></i> : <i className="bx bx-caret-up"></i>}
                {activeDropdown ?
                    <div className={styles.dropdown}>
                        <button>Sign out</button>
                        <button>My list</button>
                    </div>
                :   null
                }
            </div>
        </div>
    );
}
 
export default Profile;