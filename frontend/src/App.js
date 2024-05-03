import './App.css';
import {Helmet} from 'react-helmet';
import { Navbar } from './Componets/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Basket } from './Pages/Basket';
function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Basket' element={<Basket/>}/>
        </Routes>
        </BrowserRouter>
      </div>
      <Helmet>
        <style>{'body { background-color: #eafaff; }'}</style>
      </Helmet>

    </div>
  );
}

export default App;
