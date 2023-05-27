import { useState } from "react";
import { DATA } from "../../data"
import Sidebar from '../../UI/Sidebar/Sidebar';
import Information from './Information';
import styles from './Main.module.scss';
import BottomNavigation from "../../UI/BottomNavigation/BottomNavigation";
import Episodes from "./Episodes/Episodes";
import VideoPlayer from "../../UI/VideoPlayer/VideoPlayer";

const Main = ({ isSidebarShow, setIsSidebarShow  }) => {
    const [activeTab, setActiveTab] = useState(1);
    const [openVideo, setOpenVideo] = useState(false);

    return ( 
        <div className={styles.wrapper}>
            
            <div 
                className={styles.main}
                style={{
                    backgroundImage: `url(${DATA[0].mainImage})`, 
                    // width: isSidebarShow ? '85%' : '90%',
                }}
            >
                {activeTab === 1 ? (
                   <Information movie={DATA[0]} openVideo={ openVideo } setOpenVideo={ setOpenVideo }/> 
                ) : (
                    activeTab === 2 && <Episodes movie={DATA[0]} />
                )}
                {openVideo ? <VideoPlayer openVideo={ openVideo } setOpenVideo={ setOpenVideo }/> : ''}
               </div> 
                <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
                
        </div>
    );
}
 
export default Main;