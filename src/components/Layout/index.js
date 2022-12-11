import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.check}>
      <img src="/images/check.svg" alt="check mark"/>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
);

export default Layout;
