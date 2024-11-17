import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Clients from './pages/Clients';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Messages from './pages/Messages';
import Login from './pages/Login';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {loginWithRedirect,isAuthenticated} = useAuth0()

  return (
    <>
   
      
    {isAuthenticated ? (
      <BrowserRouter>
              <div className="App flex flex-col">
                <Header />

                    <div className="flex bg-slate-200">
                      <NavBar />
                    
                      <div className="content flex-grow p-6 pt-[2.5rem]">                    
                        <Routes>
                              <Route path="/" element={<Dashboard />} />
                              <Route path="/dashboard" element={<Dashboard />} />
                              <Route path="/clients" element={<Clients />} />
                              <Route path="/orders" element={<Orders />} />
                              <Route path="/messages" element={<Messages />} />
                              <Route path="/products" element={<Products />} />
                              <Route path="/notifications" element={<Notifications />} />
                        </Routes>
                      </div>
                    </div>
                      
                </div>
      </BrowserRouter>
      ) 
      :
      <div> <Login></Login> </div>
    }
     
     </>
)}

export default App;
