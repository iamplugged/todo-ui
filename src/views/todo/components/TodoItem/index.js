import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../../../../components/IconButton';

import styles from './todo-item.module.css';

const TodoItem = ({ id, title, complete, onUpdate, onDelete }) => {
  const handleCheckboxClick = (ev) => {
    const checked = ev.target.checked;

    if (typeof onUpdate === 'function') {
      onUpdate(id, checked);
    }
  };

  const handleDelete = () => {
    if (typeof onDelete === 'function') {
      onDelete(id);
    }
  };

  return (
    <div className={styles.item}>
      <input type="checkbox" defaultChecked={complete} onClick={handleCheckboxClick} />
      <span className={styles.title}>{title}</span>
      <IconButton onClick={handleDelete} className={styles.removeBtn}>
        <img src="/images/cross.svg" alt="delete" />
      </IconButton>
    </div>
  )
};

TodoItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  complete: PropTypes.bool,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func
}

export default TodoItem;
