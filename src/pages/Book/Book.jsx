import React, { use } from "react";
import { BsListNested } from "react-icons/bs";
import { IoStarHalfSharp } from "react-icons/io5";

const Book = ({ singleBook }) => {
  //console.log(singleBook);
  //const data = use(bookPromise);
  //console.log(data);

  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
  } = singleBook;

  return (
    <div className="card bg-base-100 w-96 shadow-sm border p-5">
      <figure className="p-3 bg-green-50 w-2/3 mx-auto">
        <img className="h-[265px] w-[210px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-7">
          {tags.map((tag) => (
            <button className="btn bg-emerald-700">{tag}</button>
          ))}
        </div>

        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p>A Book by : {publisher}</p>
        <div className="border-t-1 border-dashed"></div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating}
            <IoStarHalfSharp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
