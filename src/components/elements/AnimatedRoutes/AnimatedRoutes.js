import { AnimatePresence } from 'framer-motion';
import { Link, Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import { useLocation} from "react-router-dom";
import { Root } from '../../../App';
import Popular from '../Routes/Popular/Popular';
import Main from '../Main/Main';
import TvShows from '../Routes/TvShows/TvShows';
import Watchlist from '../Routes/Watchlist/Watchlist';
import Films from '../Routes/Films/Films';
import NotFoundPage from '../Routes/NotFoundPage/NotFoundPage';


const AnimatedRoutes = () => {
   //const [data, setData] = useState([]);
    const location = useLocation();

    return ( 
    <Route path="/" element={<Root />} location ={location} key={location.pathname}>
        <Route index element={<Popular />} /> 
        <Route path="/:id" element={<Main/>} />
        <Route path="/tvshows" element={<TvShows/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="/films" element={<Films/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
     );
}
 
export default AnimatedRoutes;