import React from 'react';
import Header from '../header';
import styles from './styles.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main>
      { children }
    </main>
  </div>
);

export default Layout;