import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';
import { StyledLoader } from './Loader';
import Navbar from './Navbar';

export default function Layout() {
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 700);
        }
    }, [loading]);

    return (
        <>
            {loading ? <StyledLoader>
            </StyledLoader> :
                <div className="layout-container">
                    <Navbar />
                    <main>
                        <Outlet></Outlet>
                    </main>
                    <Footer />
                </div>
            }
        </>
    );
};
