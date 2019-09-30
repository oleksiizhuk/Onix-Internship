import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderView from './HeaderView';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      showScrollToTop: null,
    };
  }

  componentDidMount() {
    this.checkForScrollToTop();
    window.addEventListener('resize', this.checkWindowSize);
    window.addEventListener('scroll', this.checkForScrollToTop);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowSize);
    window.addEventListener('scroll', this.checkForScrollToTop);
  }


  setScrollTop(value) {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  }

  getScrollTop() {
    return (
      document.body.scrollTop
      || ((document.documentElement && document.documentElement.scrollTop) || 0)
    );
  }

  checkWindowSize = () => {
    const { breakpoint } = this.props;
    this.setState({ isMobile: window.innerWidth < breakpoint });
  };

  checkForScrollToTop = () => {
    const { distance } = this.props;
    if (
      document.body.scrollTop > distance
      || document.documentElement.scrollTop > distance
    ) {
      this.setState({
        showScrollToTop: true
      });
    } else {
      this.setState({
        showScrollToTop: false
      });
    }
  };

  scrollUp = () => {
    const { performance, requestAnimationFrame } = window;
    const { speed, target } = this.props;
    if (
      speed <= 0
      || typeof performance === 'undefined'
      || typeof requestAnimationFrame === 'undefined'
    ) {
      return this.setScrollTop(target);
    }
    requestAnimationFrame(this.step);
  };

   step = (timestamp = 12312312) => {
     console.log("step")
     const { performance, requestAnimationFrame } = window;
     const { speed, target } = this.props;
     const start = performance.now();
     const initScrollTop = this.getScrollTop();
     const pxsToScrollBy = initScrollTop - target;

     const delta = timestamp - start;
     const progress = Math.min(delta / speed, 1);
     console.log(progress)
     this.setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy));
     if (progress < 1) {
       requestAnimationFrame(this.step);
     }
   };

   handleScroll() {
     this.checkForScrollToTop();
   }

   render() {
     const { showScrollToTop } = this.state;
     return (
       <HeaderView
         scrollToTop={this.scrollUp}
         showScrollToTop={showScrollToTop}
       />
     );
   }
}


Header.propTypes = {
  distance: PropTypes.number,
  speed: PropTypes.number,
  target: PropTypes.number,
  breakpoint: PropTypes.number,
};

Header.defaultProps = {
  distance: 50,
  breakpoint: 991,
  speed: 250,
  target: 0
};
