document.getElementById('bookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    addBookToList(title, author);

    document.getElementById('bookForm').reset();
});

function addBookToList(title, author) {
    const bookList = document.getElementById('bookList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${title} by ${author}</span>
        <button onclick="borrowBook(this)">Borrow</button>
    `;
    bookList.appendChild(li);
}

function borrowBook(button) {
    const bookItem = button.parentElement;
    bookItem.removeChild(button);
    bookItem.appendChild(document.createTextNode(' (Borrowed)'));
}
