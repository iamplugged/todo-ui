import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './link-button.module.css';

const LinkButton = forwardRef(({ className, children, ...props}, ref) => {
  const classes = classNames([styles.btn], [className], {
    [styles.disabled]: props.disabled
  });
  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  )
});

export default LinkButton;
