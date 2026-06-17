interface Book {
    title: string,
    author: string,
    isbn: string,
    publishedYear: number
    genre?: string
}

class Library {
    books: Book[];
    constructor(
        books: Book[],
    ) {
        this.books = books
    }

    addBook(book: Book) {
        this.books.push(book)
    }
    getBookDetails(isbn: string) {
        const book = this.books.find(b => b.isbn === isbn);
        return book;

    }
}

class DigitalLibrary extends Library {
    website: string;
    constructor(books: Book[], website: string) {
        super(books)
        this.website = website
    }

    listBooks() {
        return this.books
    }
}


const book1: Book = {
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949,
    genre: "Dystopian"
};

const book2: Book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227",
    publishedYear: 1937,
    genre: "Fantasy"
};

const book3: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    publishedYear: 1960
}; // genre is optional

const book4: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publishedYear: 1925,
    genre: "Classic"
};

const book5: Book = {
    title: "Dune",
    author: "Frank Herbert",
    isbn: "9780441172719",
    publishedYear: 1965,
    genre: "Science Fiction"
};

const dl = new DigitalLibrary([book1, book2], 'website.com')

dl.addBook(book5);

dl.addBook(book4)

console.log('book details', dl.getBookDetails('9780441172719'));

console.log(dl.listBooks())