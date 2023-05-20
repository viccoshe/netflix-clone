import { DATA } from "../../../data"
import Sidebar from '../../Sidebar/Sidebar';
import Information from './Information';
import styles from './Main.module.scss';


const Main = () => {
    return ( 
        <div>
            <Sidebar />
            <div style={{}}>
                <Information movie={DATA[0]} />
                <BottomNavigation/>
            </div>
        </div>
    );
}
 
export default Main;