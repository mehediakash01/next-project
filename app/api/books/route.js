// /app/api/books/route.js
import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("bookStore"); // Replace with your DB name
    const books = await db.collection("books").find().limit(4).toArray();

    return new Response(JSON.stringify(books), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
