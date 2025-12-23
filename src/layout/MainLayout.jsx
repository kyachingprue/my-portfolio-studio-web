import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className='max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-8xl mx-auto bg-[#0d0c1d]'>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;