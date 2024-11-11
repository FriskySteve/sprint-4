// Zadanie 1
// const book = {};
// book["title"] = "Zozole";
// book["author"] = "Nieznany";
// book["year"] = 2024;
// // console.log(book);

// delete book.year;

// console.log(book);

const books = [
  {
    title: "Władca Pierścieni",
    author: "J.R.R. Tolkien",
    year: 1954,
    inPrint: true,
  },
  { title: "Harry Potter", author: "J.K. Rowling", year: 1997, inPrint: true },
  { title: "Kod Da Vinci", author: "Dan Brown", year: 2003, inPrint: true },
];

// Jeśli książka została wydana przed rokiem 2000, zmień jej właściwość inPrint na false.
// Jeśli książka została wydana po roku 2000, usuń właściwość year.

for (let i = 0; i < books.length; i++) {
  if (books[i].year < 2000) {
    books[i].inPrint = false;
  } else {
    delete books[i].year;
  }
}

console.log(books);
