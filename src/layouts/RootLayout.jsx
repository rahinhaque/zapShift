import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../pages/shared/navbar/Navbar';
import Loading from '../components/Loading/Loading';

const RootLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Suspense fallback={<Loading/>}>
        <Outlet></Outlet>
      </Suspense>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;