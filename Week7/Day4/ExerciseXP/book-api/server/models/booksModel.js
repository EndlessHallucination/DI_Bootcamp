let books = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K. Rowling",
        publishedYear: 1997
    },
    {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publishedYear: 1937
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    }
];

const getAllBooks = () => books;

const getBookById = (id) => {
    return books.find(book => book.id === id);
};

const createBook = (book) => {
    books.push(book);
    return book;
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook
};