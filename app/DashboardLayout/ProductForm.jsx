"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ProductForm() {
  const [form, setForm] = useState({
    bookName: "",
    author: "",
    image: "",
    review: "",
    totalPages: "",
    rating: "",
    category: "",
    tags: "",
    publisher: "",
    yearOfPublishing: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = {
      ...form,
      totalPages: Number(form.totalPages),
      rating: Number(form.rating),
      yearOfPublishing: Number(form.yearOfPublishing),
      tags: form.tags.split(",").map((t) => t.trim()),
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success("Book added successfully!");
        setForm({
          bookName: "",
          author: "",
          image: "",
          review: "",
          totalPages: "",
          rating: "",
          category: "",
          tags: "",
          publisher: "",
          yearOfPublishing: "",
        });
        router.push("/products"); // redirect after success
      } else {
        toast.error("Failed to add book");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <Toaster />
     

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Book Name</label>
            <input
              className="input input-bordered w-full"
              name="bookName"
              placeholder="Book Name"
              value={form.bookName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Author</label>
            <input
              className="input input-bordered w-full"
              name="author"
              placeholder="Author"
              value={form.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Image URL</label>
            <input
              className="input input-bordered w-full"
              name="image"
              placeholder="Image URL"
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Review</label>
            <textarea
              className="textarea textarea-bordered w-full"
              name="review"
              placeholder="Review"
              value={form.review}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Total Pages</label>
            <input
              type="number"
              className="input input-bordered w-full"
              name="totalPages"
              placeholder="Total Pages"
              value={form.totalPages}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Rating</label>
            <input
              type="number"
              step="0.1"
              className="input input-bordered w-full"
              name="rating"
              placeholder="Rating"
              value={form.rating}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Category</label>
            <input
              className="input input-bordered w-full"
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Tags (comma-separated)</label>
            <input
              className="input input-bordered w-full"
              name="tags"
              placeholder="Tags"
              value={form.tags}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Publisher</label>
            <input
              className="input input-bordered w-full"
              name="publisher"
              placeholder="Publisher"
              value={form.publisher}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Year of Publishing</label>
            <input
              type="number"
              className="input input-bordered w-full"
              name="yearOfPublishing"
              placeholder="Year of Publishing"
              value={form.yearOfPublishing}
              onChange={handleChange}
            />
          </div>

          {/* Full width button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`btn w-full ${loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"} text-white font-semibold mt-2`}
            >
              {loading ? "Adding..." : "Add Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
