"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProductHighlights = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Book Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="border rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all p-4 flex flex-col"
          >
            <img
              src={book.image}
              alt={book.bookName}
              className="h-48 w-full object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{book.bookName}</h3>
            <p className="text-sm mb-2 line-clamp-3">{book.review}</p>
            <p className="text-green-600 font-bold mt-auto mb-2">$15.99</p>
            <Link
              href={`/products/${book.bookId}`}
              className="btn text-white w-full"
              style={{ backgroundColor: "#23BE0A" }}
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlights;
