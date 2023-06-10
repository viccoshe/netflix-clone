import { useState } from "react";
import { DATA } from "../../../data"
import Sidebar from '../../UI/Sidebar/Sidebar';
import Information from './Information';
import styles from './Main.module.scss';
import BottomNavigation from "../../UI/BottomNavigation/BottomNavigation";
import Episodes from "./Episodes/Episodes";
import VideoPlayer from "../../UI/VideoPlayer/VideoPlayer";
import { useLoaderData, useParams } from "react-router-dom";

const Main = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [openVideo, setOpenVideo] = useState(false);
    const data = useLoaderData();
    const {id} = useParams();


    return ( 
        <div className={styles.wrapper}> 
            <div 
                className={styles.main}
                style={{
                    backgroundImage: `url(${data[`${id}`].poster.url})`
                }}
            >
                {activeTab === 1 ? (
                   <Information 
                        movie={ data[`${id}`]}
                        openVideo={ openVideo } 
                        setOpenVideo={ setOpenVideo } 
                    /> 
                ) : (
                    activeTab === 2 && <Episodes movie={DATA[0]} />
                )}
                {openVideo ? <VideoPlayer movie={ data[`${id}`]} openVideo={ openVideo } setOpenVideo={ setOpenVideo }/> : ''}
               </div> 
                <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
                
        </div>
    );
}
 
export default Main;