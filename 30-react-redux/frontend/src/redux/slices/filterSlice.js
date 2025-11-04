import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // You can mutate the state thanks to the Immer library
      state.title = action.payload;

      // You also can return a new state as usually
      // return { ...state, title: action.payload };
    },
    resetFilters: () => initialState,
  },
});

export const { setTitleFilter, resetFilters } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export default filterSlice.reducer;
