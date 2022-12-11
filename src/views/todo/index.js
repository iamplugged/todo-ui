import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/Input';
import LinkButton from '../../components/LinkButton';
import Error from '../../components/Error';
import TodoItem from './components/TodoItem';

import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../../store/actions/todo';

import styles from './todo.module.css';

const Todo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const { todos, error } = useSelector(state => state.todos);

  const [activeTodos, setActiveTodos] = useState(todos);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    let filteredTodos = todos;
    if (filter === 'complete') {
      filteredTodos = todos.filter(({ complete }) => complete);
    }

    if (filter === 'incomplete') {
      filteredTodos = todos.filter(({ complete }) => !complete);
    }
    setActiveTodos(filteredTodos);
  }, [todos, filter]);

  const handleKeyPress = (e) => {
    const title = (e.target.value).trim();
    if(e.charCode === 13 && !!title) {
      dispatch(createTodo({
        title
      }));
      inputRef.current.value = '';
    }
  };

  const handleUpdate = (id, checked) => {
    dispatch(updateTodo({
      id,
      payload: {
        complete: checked
      }
    }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2 className={styles.title}>
        Todo List
      </h2>
      {error && <Error>{error}</Error>}
      <Input
        ref={inputRef}
        placeholder="Add a new todo"
        className={styles.field}
        onKeyPress={handleKeyPress} />
      <div className={styles.todos}>
        {
          activeTodos.map(({ id, title, complete }) => (
            <TodoItem
              key={id}
              id={id}
              title={title}
              complete={complete}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className={styles.filters}>
        <span className={styles.filterLabel}>Show:</span>
        <LinkButton
          disabled={filter === 'all'}
          onClick={() => setFilter('all')}>
            All
        </LinkButton>
        <LinkButton
          disabled={filter === 'complete'}
          onClick={() => setFilter('complete')}>
            Completed
        </LinkButton>
        <LinkButton
          disabled={filter === 'incomplete'}
          onClick={() => setFilter('incomplete')}>
            Incomplete
        </LinkButton>
      </div>
    </div>
  );
};

export default Todo;