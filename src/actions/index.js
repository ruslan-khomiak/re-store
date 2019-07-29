
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

export {
  booksLoaded,
  booksRequested,
};