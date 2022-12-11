import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './button.module.css';

const Button = forwardRef(({ className, children, ...props}, ref) => (
  <button ref={ref} className={classNames([styles.btn], [className])} {...props}>
    {children}
  </button>
));

export default Button;
