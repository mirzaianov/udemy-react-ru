import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/actionCreators';

import './BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <button onClick={() => dispatch(removeBook(book.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
