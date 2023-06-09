import Header from "./components/elements/Header/Header";
import Main from "./components/elements/Main/Main";
import { Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Popular from "./components/elements/Routes/Popular/Popular";
import Watchlist from "./components/elements/Routes/Watchlist/Watchlist";
import Films from "./components/elements/Routes/Films/Films";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import { useEffect, useState, createContext } from "react";
import { useLoaderData} from "react-router-dom";
import { dataLoader } from "./data";
import NotFoundPage from "./components/elements/Routes/NotFoundPage/NotFoundPage";
import Login from "./components/UI/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utiles";
import Footer from "./components/elements/Footer/Footer";
import "./App.scss";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />} loader={dataLoader} >
        <Route index element={<Popular />} loader={dataLoader}/> 
        <Route path="/:id" element={<Main/>} loader={dataLoader}/>
        <Route path="/watchlist" element={<Watchlist/>} loader={dataLoader}/>
        <Route path="/films" element={<Films/>} loader={dataLoader}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  )

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
  const [isHiddenSidebarShow, setIsHiddenSidebarShow] = useState(false);
  const [loginWindow, setLoginWindow] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const data = useLoaderData();

  useEffect(() => {
    if(!user || user === null){
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const currentUser = {
              id: user?.uid,
              name: user?.displayName,
              photo: user?.photoURL,
              notifications: null
            }
            setUser(currentUser);
          } else {
            setUser(null);
          }
        });
      }
  })

  return (
    <div>
      {!user && user === null && loginWindow 
      ? <Login signUp={signUp} 
               setSignUp={setSignUp}
               loginWindow={loginWindow} 
               setLoginWindow={setLoginWindow}
        /> 
      : ''
      }
        <Header 
                data={data}
                user={user}
                setuser={setUser}
                loginWindow={loginWindow} 
                setLoginWindow={setLoginWindow}
                
        /> 
        <div className="mainWrapper"
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
        >
          <Sidebar 
            data={data}
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
        <Footer />
    </div>
  )

}
