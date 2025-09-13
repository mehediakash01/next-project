import clientPromise from "@/lib/dbConnect";
import { NextResponse } from "next/server";

// Get user cart
export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("bookStore"); // change to your DB name
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const cart = await db.collection("carts").findOne({ email });

    return NextResponse.json(cart || { email, items: [] });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Add/update cart item
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("bookStore");
    const body = await req.json();
    const { email, product, quantity = 1 } = body;

    if (!email || !product?._id) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await db.collection("carts").updateOne(
      { email },
      {
        $setOnInsert: { email },
        $push: {
          items: { ...product, quantity },
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ message: "Item added to cart" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
