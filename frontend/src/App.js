import {Helmet} from 'react-helmet';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Basket } from './Pages/Basket';

import { FirstNavbar } from './Componets/Navbar/FirstNavbar/FirstNavbar';
import { SecondNavbar } from './Componets/Navbar/SecondNavbar/SecondNavbar';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <FirstNavbar/>
        <SecondNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Basket' element={<Basket/>}/>
        </Routes>
        </BrowserRouter>
      </div>
      <Helmet>
        <style>{'body { background-color: white; }'}</style>
      </Helmet>

    </div>
  );
}

export default App;
