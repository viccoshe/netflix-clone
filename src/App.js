import Header from "./components/elements/Header/Header";
import Main from "./components/elements/Main/Main";
import { Link, Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Popular from "./components/elements/Routes/Popular/Popular";
import TvShows from "./components/elements/Routes/TvShows/TvShows";
import Watchlist from "./components/elements/Routes/Watchlist/Watchlist";
import Films from "./components/elements/Routes/Films/Films";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import { useState } from "react";
import styles from "./App";

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* <Route index element={<Main/>}/> */}
        <Route path="/popular" element={<Popular/>}/>  {/* замени path на индекс */}
        <Route path="/tvshows" element={<TvShows/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
        <Route path="/films" element={<Films/>}/>
      </Route>
    )
    )
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
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
                <Main 
                  isSidebarShow={isSidebarShow}
                  setIsSidebarShow={setIsSidebarShow}
                />
            </div>
        </div>
        
      <div>
        <Outlet />
      </div>
    </>
  )

}
