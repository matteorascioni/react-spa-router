import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            {/* Remove this momentary style attribute once we'll have the content inside the pages */}
            <main style={{ margin: '0 auto', maxWidth: '1000px', minHeight: '100vh'}}>{children}</main>  
            <Footer />
        </>
    )
}

export default Layout;
