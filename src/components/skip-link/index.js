import React from 'react';
import { Link } from 'gatsby';
import styles from './styles.module.css';

const SkipLink = (props) => (
  <Link className={styles.container} to={props.link}>
    {props.children}
  </Link>
)

export default SkipLink