import React from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "./SecondNavbar.css"

export const SecondNavbar = () => {
  return (
    <div className='secondnavbar' >
        <div className='nav-links' >
        <Link to={"/"} className='secondpage-link'>En Yeni Ürünler</Link>
        <Link to={"/"} className='secondpage-link'>Bilgisayar & Tablet</Link>
        <Link to={"/"} className='secondpage-link'>Yazıcılar & Projeksiyon</Link>
        <Link to={"/"} className='secondpage-link'>Telefon & Telefon Aksesuarları</Link>
        <Link to={"/"} className='secondpage-link'>TV, Görüntü & Ses Sistemleri</Link>
        <Link to={"/"} className='secondpage-link'>Beyaz Eşya</Link>
        <Link to={"/"} className='secondpage-link'>Klima ve Isıtıcılar</Link>
        <Link to={"/"} className='secondpage-link'>Elektrikli Ev Aletleri</Link>
        <Link to={"/"} className='secondpage-link'>Foto & Kamera</Link>
        <Link to={"/"} className='secondpage-link'>Oyun & Oyun Konsolları</Link>
        </div>
    </div>
  )
}
