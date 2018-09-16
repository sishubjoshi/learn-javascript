//  Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//  UI Constructor

function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
    // console.log(book);
    const list = document.getElementById('book-list');

    // create an element
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class="delete">X</a></td>
    `;

    list.appendChild(row);

    // console.log(row); 

}

// show alert 
UI.prototype.showAlert = function(message, className) {
    // create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // add Text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);

    // timeout
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

// delete book
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}


// clear fields

UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Local storage

function Store() {}

// display books
Store.prototype.getBooks = function() {
    let books;

    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}

// Add books To list
Store.prototype.displayBooks = function() {
    const storage = new Store();
    const books = storage.getBooks();
    books.forEach(function(book) {
        const ui = new UI();
        // Add book to list
        ui.addBookToList(book);
    });

}

// add books
Store.prototype.addBooks = function(book) {
        const storage = new Store();
        const books = storage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    // delete Book
Store.prototype.deleteBooks = function(isbn) {
    const storage = new Store();
    const books = storage.getBooks();
    books.forEach(function(book, index) {
        if (book.isbn === isbn) {
            books.splice(index, 1);
        }
        localStorage.setItem('books', JSON.stringify(books));

    });
}




// Dom load event

document.addEventListener('DOMContentLoaded', function() {
    const storage = new Store();
    storage.displayBooks();
});
// EVENT LISTENERS

document.getElementById('book-form').addEventListener('submit', function(e) {
    // console.log('test');

    // get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // validate 
    if (title === '' || author === '' || isbn === '') {

        // error alert
        ui.showAlert('please fill the form before submitting', 'error');
    } else {
        // Add Books to list
        ui.addBookToList(book);

        // add book to LS
        const storage = new Store();
        storage.addBooks(book);
        // show success
        ui.showAlert('Book Added', 'success');

        // clear fields
        ui.clearFields();

    }


    // console.log(book);

    e.preventDefault();

});

// Event Listener to delete

document.getElementById('book-list').addEventListener('click', function(e) {

    const ui = new UI();

    // delete book
    ui.deleteBook(e.target);

    // delete books from LS
    const storage = new Store();
    storage.deleteBooks(e.target.parentElement.previousElementSibling.textContent);

    //  show alert

    ui.showAlert('book deleted', 'success');

    e.preventDefault();
});