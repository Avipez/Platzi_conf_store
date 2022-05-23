import React, { children } from 'react';
import "../styles/Layout.css"
import Header from './Header';
import Footer from "./Footer"

const layout = ({children}) => {
    return (
        <div className='Main'>
            <Header />
                { children }
            <Footer />
        </div>
    );
}

export default layout;