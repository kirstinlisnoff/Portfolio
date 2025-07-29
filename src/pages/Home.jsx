import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
        <Navbar />
        <main>
            <Header />
            <div className="HomeContent">
                <h2>Welcome to my portfolio!</h2>
            </div>
        </main>
        <Footer />
        </>
    );
};

export default Home;