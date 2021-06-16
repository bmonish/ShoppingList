import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {id: 1, title: 'Milk'},
    {id: 2, title: 'Bread'},
    {id: 3, title: 'Biscuits'},
    {id: 4, title: 'Chocolate'},
    {id: 5, title: 'Cookie'},
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().getMilliseconds(),
        title: action.payload.title,
      };
      state.push(todo);
    },

    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
