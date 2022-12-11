import React from 'react';

import styles from './field-error.module.css';

const FieldError = ({ children }) => <p className={styles.error}>{children}</p>;

export default FieldError;
