import {Helmet} from 'react-helmet';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Basket } from './Pages/Basket';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';

import FirstNavbar from './Componets/Navbar/FirstNavbar/FirstNavbar';
import { SecondNavbar } from './Componets/Navbar/SecondNavbar/SecondNavbar';
import { Footer } from './Componets/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <FirstNavbar/>
        <SecondNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Search' element={<Home/>}/>
          <Route path='/Basket' element={<Basket/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
      <Helmet>
        <style>{'body { background-color: white; }'}</style>
      </Helmet>

    </div>
  );
}

export default App;
