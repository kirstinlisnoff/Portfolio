import React from 'react';
import Navbar from './components/Navbar';   // adjust the path
import Footer from './components/Footer';   // adjust the path
import { Outlet } from 'react-router-dom';
import Header from './components/Header'; // adjust the path

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
