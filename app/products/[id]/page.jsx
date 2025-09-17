
import React from "react";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { AddToCart } from "@/Component/AddToCart";



const ProductDetails = async ({ params }) => {
  const { id } = params;

  // Connect to MongoDB
  const client = await dbConnect;
  const db = client.db("bookStore");

  const book = await db.collection("books").findOne({ bookId: parseInt(id) });

  if (!book) {
    return <div className="text-center py-20">Book is missing. select another one</div>;
  }



  return (
    <div className="max-w-5xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
      {/* Left: Book Image */}
      <div className="flex-1">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded shadow w-full object-cover"
        />
      </div>

      {/* Right: Book Details */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{book.bookName}</h1>
        <h2 className="text-xl text-gray-600 mb-2">by {book.author}</h2>
        <p className="text-gray-700 mb-4 line-clamp-6">{book.review}</p>
        <p className="text-green-600 font-bold text-2xl mb-4">$15.99</p>

        <div className="flex gap-4">
          {/* ✅ Add to Cart Button */}
        <AddToCart book={book}></AddToCart>

          <button
            className="btn text-white"
            style={{ backgroundColor: "#59C6D2" }}
          >
            Buy Now
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-gray-600">
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Year:</strong> {book.yearOfPublishing}</p>
          <p><strong>Total Pages:</strong> {book.totalPages}</p>
          <p><strong>Rating:</strong> {book.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
