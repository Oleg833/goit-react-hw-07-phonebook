import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// const tasksSlice = createSlice({
//   // Ім'я слайсу
//   name: 'tasks',
//   // Початковий стан редюсера слайсу
//   initialState: tasksInitialState,
//   // Об'єкт редюсерів
//   reducers: {
//     addTask(state, action) {},
//     deleteTask(state, action) {},
//     toggleCompleted(state, action) {},
//   },
// });

// // Генератори екшенів
// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// // Редюсер слайсу
// const tasksReducer = tasksSlice.reducer;
