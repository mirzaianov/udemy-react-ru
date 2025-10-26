import * as a from './actionTypes';

export const addBook = (newBook) => ({
  type: a.ADD_BOOK,
  payload: newBook,
});

export const deleteBook = (id) => ({
  type: a.DELETE_BOOK,
  payload: id,
});

export const toggleFavorite = (id) => ({
  type: a.TOGGLE_FAVORITE,
  payload: id,
});
