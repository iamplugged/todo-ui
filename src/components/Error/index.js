import React from 'react';

import styles from './error.module.css';

const Error = ({ children }) => <div className={styles.error}>{children}</div>;

export default Error;
