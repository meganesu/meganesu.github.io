import React from 'react';
import Header from '../header';
import Footer from '../footer';
import styles from './styles.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      { children }
    </main>
    <Footer />
  </div>
);

export default Layout;