// /app/api/users/route.js
import clientPromise from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json(); 
    const client = await clientPromise;
    const db = client.db("bookStore"); 
    const usersCollection = db.collection("users");

    // Insert user info
    const result = await usersCollection.insertOne(body);

    return new Response(
      JSON.stringify({ success: true, insertedId: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
