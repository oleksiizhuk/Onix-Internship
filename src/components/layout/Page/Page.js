import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageView from './PageView';

export default class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <PageView childrens={children} />
        <Footer />
      </>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};
