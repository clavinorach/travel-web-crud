import React from 'react';
import {Link} from "react-router-dom"

const Dashboard = () => {

  return (
    <div className='container'>
      <h1 className='title is-4 mt-3'>Selamat Datang di Website Travelku.id</h1>
      <h2 className='title is-6'>Booking Travel Anda dan Kunjungi Destinasi Impian Anda!</h2>
      <h1 className="title is-5 mt-6 has-text-centered">Silahkan Klik Tombol Dibawah Ini Untuk Mendaftar</h1>
      <div className='has-text-centered is-half'>
      <Link to="add" className="button is-primary">
        Registrasi
      </Link>
      </div>
    </div>
  )
}

export default Dashboard