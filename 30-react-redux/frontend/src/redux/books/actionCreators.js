import * as a from './actionTypes';

export const addBook = (newBook) => ({
  type: a.ADD_BOOK,
  payload: newBook,
});
