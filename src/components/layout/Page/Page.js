import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageView from './PageView';
import { ThemeContext } from '../../../сontext/ThemeContext';

const Page = (props) => {
  const [theme, setTheme] = useState('light');
  const { children } = props;

  const toggleStyle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleStyle }}>
      <Header />
      <PageView childrens={children} />
      <Footer />
    </ThemeContext.Provider>
  );
};
export default Page;
Page.propTypes = {
  children: PropTypes.node.isRequired
};
