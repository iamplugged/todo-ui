import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './input.module.css';

const Input = forwardRef(({ className, ...props}, ref) => (
  <input ref={ref} className={classNames([styles.input], [className])} {...props} />
));

export default Input;
