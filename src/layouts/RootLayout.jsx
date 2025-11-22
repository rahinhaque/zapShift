import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../pages/shared/navbar/Navbar';
import Loading from '../components/Loading/Loading';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;