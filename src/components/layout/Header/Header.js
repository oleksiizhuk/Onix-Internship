import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderView from './HeaderView';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScrollToTop: null,
    };
  }

  componentDidMount() {
    this.checkForScrollToTop();
    window.addEventListener('scroll', this.checkForScrollToTop);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.checkForScrollToTop);
  }

  setScrollTop(value) {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  }

  getScrollTop = () => {
    return (
      document.body.scrollTop
      || ((document.documentElement && document.documentElement.scrollTop) || 0)
    );
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
    const { requestAnimationFrame } = window;

    const initScrollTop = this.getScrollTop();

    this.setScrollTop(initScrollTop - 20);

    const { showScrollToTop } = this.state;
    if (!showScrollToTop) {
      return;
    }
    if (initScrollTop > 1) {
      requestAnimationFrame(this.scrollUp);
    }
  };

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
};

Header.defaultProps = {
  distance: 50,
};
