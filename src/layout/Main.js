import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='ltx-content-wrapper  transparent'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;