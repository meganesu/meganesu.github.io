import React from 'react';
import SkipLink from '../skip-link'
import Header from '../header';
import Footer from '../footer';
import styles from './styles.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <SkipLink link="#main-content">Skip to main content</SkipLink>
    <Header />
    <main className={styles.main} id="main-content" tabIndex={-1}>
      { children }
    </main>
    <Footer />
  </div>
);

export default Layout;