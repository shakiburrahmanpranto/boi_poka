import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  //useEffect{() =>{
  //fetch('https://github.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/blob/main/data/booksData.json')
  //} , []}

  //useEffect(() => {
  //  fetch("booksData.json")
  //    .then((res) => res.json())
  //    .then((data) => {
  //      console.log(data);
  //      setAllBooks(data);
  //    });
  //}, []);

  // const bookPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl text-center p-6">
        <Suspense fallback={<span>loading..</span>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((singleBook) => (
              <Book key={singleBook.bookId} singleBook={singleBook}></Book>
            ))}
          </div>
        </Suspense>
      </h1>
    </div>
  );
};

export default Books;
