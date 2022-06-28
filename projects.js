import Book from './Book.js';
import StoreBook from './StoreBook.js';
import UiPage from './UiPage.js';

// Event: Add Button
document.querySelector('#form').addEventListener('submit', (e) => {
  // Prevent default submission
  e.preventDefault();

  // get values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  UiPage.addBookToUiPage(book);

  StoreBook.addBookToStore(book);
});

document.addEventListener('DOMContentLoaded', () => {
  UiPage.displayBooks();
});

// Event Remove book
document.querySelector('.container').addEventListener('click', (e) => {
  // remove from UiPage
  UiPage.removeBook(e.target);

  // remove from local storage
  StoreBook.removeBook(
    e.target.previousElementSibling.previousElementSibling.textContent,
  );
});
