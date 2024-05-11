import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './SecondNavbar.css';

export const SecondNavbar = () => {
  return (
    <div className='second-navbar'>
      <div className='second-navbar-links'>
        <Link to={"/NewProducts"} className='second-navbar-link'>En Yeni Ürünler</Link>
        <Link to={"/ComputerTablet"} className='second-navbar-link'>Bilgisayar & Tablet</Link>
        <Link to={"/PrintersProjectors"} className='second-navbar-link'>Yazıcılar & Projeksiyon</Link>
        <Link to={"/PhoneAccessories"} className='second-navbar-link'>Telefon Aksesuarları</Link>
        <Link to={"/TVAudioSystems"} className='second-navbar-link'>TV, Görüntü & Ses Sistemleri</Link>
        <Link to={"/Appliances"} className='second-navbar-link'>Beyaz Eşya</Link>
        <Link to={"/AirConditioningHeating"} className='second-navbar-link'>Klima ve Isıtıcılar</Link>
        <Link to={"/HomeAppliances"} className='second-navbar-link'>Elektrikli Ev Aletleri</Link>
        <Link to={"/PhotoCamera"} className='second-navbar-link'>Foto & Kamera</Link>
        <Link to={"/GamesConsoles"} className='second-navbar-link'>Oyun & Oyun Konsolları</Link>
      </div>
    </div>
  );
};
