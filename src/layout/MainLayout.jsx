import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className='w-full px-2 md:px-4 lg:px-5 mx-auto bg-[#110b5f]'>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;