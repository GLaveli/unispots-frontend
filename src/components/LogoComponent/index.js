import React from 'react';
import logo from '../../assets/spot text logo.png';

//let today = new Date().toLocaleDateString().split("/");

const Logo = () => (
    <>
        <img src={logo} className="spotLogo" alt="Spot logo" />
    </>
);

export default Logo;