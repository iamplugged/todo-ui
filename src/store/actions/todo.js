import { createAsyncThunk } from "@reduxjs/toolkit";
import client, { getErrorMessage } from "../apiClient";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await client.get('/todos');
      return data;
    } catch (e) {
      return rejectWithValue(getErrorMessage(e));
    }
  }
);

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await client.post('/todos', payload);
      return data;
    } catch (e) {
      return rejectWithValue(getErrorMessage(e));
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const { data } = await client.put(`/todos/${id}`, payload);
      return { id, data };
    } catch (e) {
      return rejectWithValue(getErrorMessage(e));
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await client.delete(`/todos/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(getErrorMessage(e));
    }
  }
);
