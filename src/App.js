import Header from "./components/elements/Header/Header";
import Main from "./components/elements/Main/Main";
import { Link, Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Popular from "./components/elements/Routes/Popular/Popular";
import TvShows from "./components/elements/Routes/TvShows/TvShows";
import Watchlist from "./components/elements/Routes/Watchlist/Watchlist";
import Films from "./components/elements/Routes/Films/Films";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import { useEffect, useState, createContext } from "react";
import styles from "./App";
import { useRouteError} from "react-router-dom";
import ErrorPage from "./components/UI/ErrorPage/ErrorPage";
import { getApi } from "./data";
import { dataLoader } from "./data";
import NotFoundPage from "./components/elements/Routes/NotFoundPage/NotFoundPage";


export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);


  // useEffect(() => {
  //   getApi('https://dummyjson.com/products') //`https://kinopoiskapiunofficial.tech/api/v2.2/films`
  //   .then(res => console.log(res.products) && setData(res.json().products));  //items
  // }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Popular />} /> 
        <Route path="/:id" element={<Main/>} />
        <Route path="/tvshows" element={<TvShows/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="/films" element={<Films/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  )
  ////loader={dataLoader} верни все ладеры

  return (
    <div>
    <DataContext.Provider value={{data}}>
      <RouterProvider router={router}/>      
       </DataContext.Provider>

    </div>
  );
}

export default App;


const Root = () => { 
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  return (
    <>
        <Header /> 
        <div style={{
            display: 'flex',
            flexDirection: 'row'}}
        >
            <Sidebar 
              isSidebarShow={isSidebarShow}
              setIsSidebarShow={setIsSidebarShow}
            />
            <div style={{width: isSidebarShow ? '85%' : '90%'}}>
                <Outlet 
                  isSidebarShow={isSidebarShow}
                  setIsSidebarShow={setIsSidebarShow}
                />
            </div>
        </div>


    </>
  )

}
