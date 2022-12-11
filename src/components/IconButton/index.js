import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './icon-button.module.css';

const IconButton = forwardRef(({ className, children, ...props}, ref) => (
  <button ref={ref} className={classNames([styles.btn], [className])} {...props}>
    {children}
  </button>
));

export default IconButton;
