import React from "react"

import styles from "./styles.module.css"

const Footer = () => (
  <p className={styles.footer}>
    {`Made by Megan Sullivan © 2019 - ${new Date().getFullYear()}`}
  </p>
)

export default Footer
