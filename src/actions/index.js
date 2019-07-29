
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOK_LOADED',
    payload: newBooks,
  }
};


const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED',
  }
};

const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error
  }
};

export {
  booksLoaded,
  booksRequested,
  booksError,
};