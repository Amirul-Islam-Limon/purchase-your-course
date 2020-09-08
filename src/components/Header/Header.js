import React from 'react';
import './Header.css'
import image from '../../photos/main-image.jpg'

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome To Coders House</h1>
            <h5>Now everything is in your hands.</h5>
            <img src={image} alt=""/>
        </div>
    );
};

export default Header;