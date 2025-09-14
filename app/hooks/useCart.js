"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function useCart(userEmail) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load cart from DB
  useEffect(() => {
    if (!userEmail) return;
    const fetchCart = async () => {
      try {
        const res = await axios.get(`/api/cart?email=${userEmail}`);
        setCartItems(res.data.items || []);
      } catch (err) {
        console.error("Error fetching cart", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [userEmail]);

  // Add item
  const addItem = async (product, quantity = 1) => {
    try {
      await axios.post("/api/cart", { email: userEmail, product, quantity });
      setCartItems((prev) => [...prev, { ...product, quantity }]);
    } catch (err) {
      console.error("Error adding item", err);
    }
  };

  // Remove item
  const removeItem = async (id) => {
    try {
      await axios.delete("/api/cart", {
        data: { email: userEmail, productId: id },
      });
      setCartItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing item", err);
    }
  };

  // Get total
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return { cartItems, loading, addItem, removeItem, getTotalPrice };
}
