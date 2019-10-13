import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageView from './PageView';

import { ThemeProvider } from '../../../сontext/ThemeContext';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
  }

  toggleStyle = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === 'light' ? 'dark' : 'light'
    });
  };

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeProvider value={{ theme, changeTheme: this.toggleStyle }}>
        <Header />
        <PageView childrens={children} />
        <Footer />
      </ThemeProvider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired
};
