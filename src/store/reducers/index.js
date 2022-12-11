import authReducer from './auth';
import todoReducer from './todo';

const rootReducer = {
  auth: authReducer,
  todos: todoReducer
};

export default rootReducer;
