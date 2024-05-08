import React from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "./SecondNavbar.css"

export const SecondNavbar = () => {
  return (
    <div className='s-nav' >
        <div className='nav-links' >
        <Link to={"/"} className='s-link'>En Yeni Ürünler</Link>
        <Link to={"/"} className='s-link'>Bilgisayar & Tablet</Link>
        <Link to={"/"} className='s-link'>Yazıcılar & Projeksiyon</Link>
        <Link to={"/"} className='s-link'>Telefon & Telefon Aksesuarları</Link>
        <Link to={"/"} className='s-link'>TV, Görüntü & Ses Sistemleri</Link>
        <Link to={"/"} className='s-link'>Beyaz Eşya</Link>
        <Link to={"/"} className='s-link'>Klima ve Isıtıcılar</Link>
        <Link to={"/"} className='s-link'>Elektrikli Ev Aletleri</Link>
        <Link to={"/"} className='s-link'>Foto & Kamera</Link>
        <Link to={"/"} className='s-link'>Oyun & Oyun Konsolları</Link>
        </div>

        
    </div>
  )
}
