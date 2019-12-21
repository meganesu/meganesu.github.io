import React from 'react';
import { Link } from 'gatsby';

import styles from './styles.module.css';

const NavBar = () =>
  <ul className={styles.navBar}>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>

export default NavBar;