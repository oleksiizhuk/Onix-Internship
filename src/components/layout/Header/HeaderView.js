import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import Logo from '../../../assets/images/logo.png';
import ReturnArrow from './components/ReturnArrow';
import { ThemeConsumer } from '../../../сontext/ThemeContext';

const HeaderView = ({
  scrollToTop, showScrollToTop
}) => {
  return (
    <ThemeConsumer>
      {
        ({ theme, changeTheme }) => (
          <header className={`header ${theme}`}>
            <div className="container">
              <nav className="header__nav">
                <ul className="header__nav__ul">
                  <li className="header__nav__ul__li">
                    <Link
                      activeClass="active"
                      to="section-1"
                      duration={1000}
                      spy
                      smooth
                      offset={-0}
                    >
                      PORTFOLIO
                    </Link>
                  </li>
                  <li className="header__nav__ul__li">
                    <Link
                      activeClass="active"
                      to="section-2"
                      duration={1000}
                      spy
                      smooth
                      offset={-0}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="header__nav__ul__li logo">
                    <button
                      type="button"
                      onClick={changeTheme}
                    >
                      Change theme
                      <img src={Logo} alt="logo" />
                    </button>
                  </li>
                  <li className="header__nav__ul__li"><a href="/">BLOG</a></li>
                  <li className="header__nav__ul__li">
                    <Link
                      activeClass="active"
                      to="section-3"
                      duration={1000}
                      spy
                      smooth
                      offset={-0}
                    >
                      GET IN TOUCH
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {showScrollToTop
              ? (
                <ReturnArrow
                  scrollToTop={scrollToTop}
                />
              ) : null}
          </header>
        )
      }
    </ThemeConsumer>
  );
};

HeaderView.propTypes = {
  scrollToTop: PropTypes.func,
  showScrollToTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
};

HeaderView.defaultProps = {
  scrollToTop: undefined,
  showScrollToTop: false
};

export default HeaderView;
