import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../actions/todo';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    error: ''
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [fetchTodos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos = payload
    },
    [fetchTodos.rejected]: (state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    },
    [createTodo.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [createTodo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos.push(payload);
    },
    [createTodo.rejected]: (state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    },
    [updateTodo.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [updateTodo.fulfilled]: (state, { payload: { id, data } }) => {
      const todoIndex = state.todos.findIndex(({ id: todoId }) => todoId === id);
      state.todos[todoIndex] = data;
      state.loading = false;
    },
    [updateTodo.rejected]: (state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    },
    [deleteTodo.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [deleteTodo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
    [deleteTodo.rejected]: (state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }
  }
});

export default todosSlice.reducer;