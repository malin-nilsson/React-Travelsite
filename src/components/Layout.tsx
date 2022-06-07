import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout() {
    return (
        <div className="layout-container">
            <Navbar />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    );
};
