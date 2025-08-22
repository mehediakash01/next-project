"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our Bookstore
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          At BookVerse, we are passionate about connecting readers with their next great adventure. Explore, discover, and dive into the world of books with us.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              To inspire a love for reading by providing a wide selection of books and fostering a community of book lovers.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>
              To become the most trusted and engaging online bookstore where readers of all ages can find their next favorite book.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p>Thousands of books across all genres and categories to suit every reader.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Expert Recommendations</h3>
            <p>Our team curates top picks and recommendations for every reader.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Quick and reliable shipping ensures your next book is never far away.</p>
          </div>
        </div>
      </section>

      {/* Team / About Us Story */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp"
            alt="Bookstore Team"
           className="h-48 w-full object-cover rounded mb-4"
          />
          
          <div className="md:w-1/2">
            <p className="mb-4">
              BookVerse started as a small independent bookstore, driven by the love of reading and a desire to create a community around books. Over the years, we've grown into an online platform that brings books to readers worldwide.
            </p>
            <p>
              Our dedicated team is passionate about helping you find the perfect book, whether it's a timeless classic or a modern bestseller. We believe every book has the power to inspire, educate, and entertain.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-6">
          Explore new releases, curated collections, and special offers. Your next adventure awaits!
        </p>
        <a
          href="/product"
          className="btn bg-white text-green-600 hover:bg-gray-100 font-semibold"
        >
          Browse Books
        </a>
      </section>
    </div>
  );
}
