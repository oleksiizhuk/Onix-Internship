import React from 'react';
import Logo from '../../images/logo.png';

function header() {

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__nav__ul">
                        <li className="header__nav__ul__li"><a href="#section-1">PORTFOLIO</a></li>
                        <li className="header__nav__ul__li"><a href="#section-2">ABOUT</a></li>
                        <li className="header__nav__ul__li logo">
                            <a href="#">
                                <img src={Logo} alt="logo"/>
                            </a>
                        </li>
                        <li className="header__nav__ul__li"><a href="#">BLOG</a></li>
                        <li className="header__nav__ul__li"><a href="#section-3">GET IN TOUCH</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default header;