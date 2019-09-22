import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageView from './PageView';

export default class Page extends Component {
  render() {
    return (
      <>
        <Header />
        <PageView {...this.props.children} />
        <Footer />
      </>
    );
  }
}
