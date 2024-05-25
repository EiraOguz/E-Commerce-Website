import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { Home } from './Pages/Home';
import  Profile  from './Pages/Profile';
import { Basket } from './Pages/Basket';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';

import { Footer } from './Componets/Footer/Footer';
import FirstNavbar from './Componets/Navbar/FirstNavbar/FirstNavbar';
import { SecondNavbar } from './Componets/Navbar/SecondNavbar/SecondNavbar';

import {ProductList} from './Pages/ProductList';
import {ProductDetail} from './Pages/ProductDetail';

import PrivateRoute from './Componets/Routes/PrivateRoute';
import PublicRoute from './Componets/Routes/PublicRoute';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <FirstNavbar/>
        <SecondNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<PublicRoute><Login /></PublicRoute>}/>
          <Route path='/Signup' element={<PublicRoute><Signup /></PublicRoute>}/>
          <Route path='/Profile' element={<PrivateRoute><Profile /></PrivateRoute>}/>
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
          <Route path='/Basket' element={<Basket />}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
