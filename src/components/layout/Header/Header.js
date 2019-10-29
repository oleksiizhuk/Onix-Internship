import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderView from './HeadeView';

const Header = (props) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  function checkForScrollToTop() {
    const { distance } = props;
    const showButton = !!((document.body.scrollTop > distance || document.documentElement.scrollTop > distance));
    setShowScrollButton(showButton);
  }

  useEffect(() => {
    checkForScrollToTop();
    window.addEventListener('scroll', checkForScrollToTop);
    return () => {
      window.removeEventListener('scroll', checkForScrollToTop);
    };
  });

  function setScrollTop(value) {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  }

  function getScrollTop() {
    return (
      document.body.scrollTop
      || ((document.documentElement && document.documentElement.scrollTop) || 0)
    );
  }

  function scrollUp() {
    const { requestAnimationFrame } = window;
    const initScrollTop = getScrollTop();
    setScrollTop(initScrollTop - 20);
    if (!showScrollButton) {
      return;
    }
    if (initScrollTop > 1) {
      requestAnimationFrame(scrollUp);
    }
  }

  return (
    <HeaderView
      scrollToTop={scrollUp}
      showScrollButton={showScrollButton}
    />
  );
};
export default Header;

Header.propTypes = {
  distance: PropTypes.number,
};

Header.defaultProps = {
  distance: 50,
};
