import React from 'react';
import Logo from '../../../assets/images/logo.png';
import {Link} from "react-scroll";

const header = () => {

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__nav__ul">
                        <li className="header__nav__ul__li">
                            <Link activeClass="active" to="section-1"
                                  duration={1000}
                                  spy={true}
                                  smooth={true}
                                  offset={-0}>
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className="header__nav__ul__li">
                            <Link activeClass="active" to="section-2"
                                  duration={1000}
                                  spy={true}
                                  smooth={true}
                                  offset={-0}>
                                ABOUT
                            </Link>
                        </li>
                        <li className="header__nav__ul__li logo">
                            <a href="/">
                                <img src={Logo} alt="logo"/>
                            </a>
                        </li>
                        <li className="header__nav__ul__li"><a href="/">BLOG</a></li>
                        <li className="header__nav__ul__li">
                            <Link activeClass="active" to="section-3"
                                  duration={1000}
                                  spy={true}
                                  smooth={true}
                                  offset={-0}>
                                GET IN TOUCH
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default header;
