// Lets begin with our book prototype
function BookSkeleton(title, author) {
  this.title = title;
  this.author = author;
  this.added_at = new Date().toLocaleDateString();
};

// Lets define our collection of books
const hasBooks = localStorage.getItem('books');

// Lets create initial collection if there are no books in storage
if (!hasBooks) {
  let books = [];
  books.push(
    new BookSkeleton('Book 1', 'Author 1'),
    new BookSkeleton('Book 2', 'Author 2'),
    new BookSkeleton('Book 3', 'Author 3'),
    new BookSkeleton('Book 4', 'Author 4'),
    new BookSkeleton('Book 5', 'Author 5'),
  );

  // Okay, now lets save books to local storage
  localStorage.setItem('books', JSON.stringify(books));
} else {
  // We load the collection from storage if exists
  books = JSON.parse(hasBooks);
}

// Lets define our add book function
function addBook(title, author) {
  books.push(new BookSkeleton(title, author));
  localStorage.setItem('books', JSON.stringify(books));
}

// Lets define our remove book function
function removeBook(key) {
}

// Lets get the add book button
const addButton = document.querySelector('#add-button');
// Lets add a click event listener with which we will perform the add logic for the new book
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  form = document.getElementById('add-book-form');
  if (!form.reportValidity()) {
    return;
  }
  // lets get the new title
  newTitle = document.querySelector('#book-title-input').val;
  // now lets get the new author
  newAuthor = document.querySelector('#book-author-input').val;
  // lets add it to the books object at this point
  addBook(newTitle, newAuthor);
  // okay great. Lets reset the form now
  form.reset();
  console.log(1);
})