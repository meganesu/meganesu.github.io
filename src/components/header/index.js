import React from 'react';
import NavBar from './components/nav-bar/';
import SocialLinks from './components/social-links/';
import styles from './styles.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Megan Sullivan</h1>
    <NavBar />
    <SocialLinks />
  </header>
)

export default Header