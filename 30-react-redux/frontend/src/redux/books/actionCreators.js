import * as a from './actionTypes';

export const addBook = (newBook) => ({
  type: a.ADD_BOOK,
  payload: newBook,
});

export const removeBook = (id) => ({
  type: a.REMOVE_BOOK,
  payload: id,
});
