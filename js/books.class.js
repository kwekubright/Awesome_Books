function BookSkeleton(title, author) {
  this.title = title;
  this.author = author;
  this.added_at = new Date().toLocaleDateString();
}

class BookClass {
  hasBooks = localStorage.getItem('books');
  books = [
    {
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      title: 'Book 2',
      author: 'Author 2',
    },
    {
      title: 'Book 3',
      author: 'Author 3',
    },
    {
      title: 'Book 4',
      author: 'Author 4',
    },
    {
      title: 'Book 5',
      author: 'Author 5',
    },
  ];

  constructor() {
    // Lets create initial collection if there are no books in storage
    if (!this.hasBooks) {
      // Okay, now lets save books to local storage
      localStorage.setItem('books', JSON.stringify(this.books));
    } else {
      // We load the collection from storage if exists
      this.books = JSON.parse(this.hasBooks);
    }
  }

  displayBooks() {
    let bookHtml = '';
    for (let i = 0; i < this.books.length; i += 1) {
      bookHtml += ` 
    <div id='book-${i}'>   
      <div class='book'>
        <h3 class='title'>${this.books[i].title} </h3>
        <p class='author'>${this.books[i].author} </p>
        <button onclick='removeBook(${i})'>Remove</button>
      </div>
      <hr>
    </div>`;
    }
    document.querySelector('#books-container').innerHTML = bookHtml;
  }

  // Lets define our add book function
  addBook(title, author) {
    this.books.push(new BookSkeleton(title, author));
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  // Lets define our remove book function
  removeBook(key) {
    // lets remove the book
    this.books.splice(key, 1);
    // lets update the storage
    localStorage.setItem('books', JSON.stringify(this.books));
    // lets update the page
    const id = `book-${key}`;
    document.getElementById(id).remove();
    this.displayBooks();
  }
}

// Lets get the add book button
const addButton = document.querySelector('#add-button');
// Lets add a click event listener with which we will perform the add logic for the new book
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.getElementById('add-book-form');
  if (!form.reportValidity()) {
    return;
  }
  // lets get the new title
  const newTitle = document.querySelector('#book-title-input').value;
  // now lets get the new author
  const newAuthor = document.querySelector('#book-author-input').value;
  // lets add it to the books object at this point
  let book = new BookClass();
  book.addBook(newTitle, newAuthor);
  // okay great. Lets reset the form now
  form.reset();
});

function removeBook(key) {
  book = new BookClass();
  book.removeBook(key);
}


// load the form fields from local storage
window.onload = () => {
  books_ = new BookClass();
  books_.displayBooks();
};