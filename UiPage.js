import StoreBook from './StoreBook.js';
// class UiPage
export default class UiPage {
  // display books
  static displayBooks() {
    const books = StoreBook.getBooks();

    books.forEach((book) => {
      UiPage.addBookToUiPage(book);
    });
  }

  // add book to UiPage

  static addBookToUiPage(book) {
    const container = document.querySelector('.container');

    const ul = document.createElement('ul');

    ul.innerHTML = `
      <li>${book.title}</li>
      <li>${book.author}</li>
      <button class="delete" type="button">Remove</button>
      <hr />
    `;
    container.insertBefore(ul, document.querySelector('#form'));
  }

  static removeBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }
}
