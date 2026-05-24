const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://example.com/harry.jpg",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://example.com/hobbit.jpg",
        alreadyRead: true
    }
];

const section = document.querySelector(".listBooks");

for (let i = 0; i < allBooks.length; i++) {
    
    const book = allBooks[i];

    const div = document.createElement("div");

    div.innerHTML = `
        <p>${book.title} written by ${book.author}</p>
        <img src="${book.image}" width="100px">
    `;

    if (book.alreadyRead) {
        div.style.color = "red";
    }

    section.appendChild(div);
}