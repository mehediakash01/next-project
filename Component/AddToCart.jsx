"use client";
import useCart from "@/app/hooks/useCart";
import React from "react";
import toast from "react-hot-toast";

export const AddToCart = ({ book }) => {
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    try {
      await addItem({
        ...book,
        price: book.price || book.discountPrice, // ensure price exists
        quantity: 1,
      });

      toast.success("Book added to cart! 📚", {
        duration: 3000,
        position: "top-right",
      });
    } catch (err) {
      console.error("Add to cart error:", err);
      toast.error("Failed to add book to cart ❌", {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <button
      className="btn text-white"
      style={{ backgroundColor: "#23BE0A" }}
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};
