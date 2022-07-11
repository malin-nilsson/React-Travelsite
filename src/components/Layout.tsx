import { AnimatePresence, motion } from 'framer-motion';
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
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ opacity: 0.3 }}
                        className="layout-container">
                        <Navbar />
                        <main>
                            <Outlet></Outlet>
                        </main>
                        <Footer />
                    </motion.div>
                </AnimatePresence>
            }
        </>
    );
};
