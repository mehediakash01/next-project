import clientPromise from "@/lib/dbConnect";
import { NextResponse } from "next/server";


const DB_NAME = "bookStore"; 



// POST: add new book
export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db(DB_NAME);

    const result = await db.collection("books").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, book: result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
