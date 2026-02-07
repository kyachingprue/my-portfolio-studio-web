import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className='w-full mx-auto bg-[#0c0a29]'>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;