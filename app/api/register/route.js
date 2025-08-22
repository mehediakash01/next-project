import clientPromise from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bookStore"); 
    const usersCollection = db.collection("users");


    const existing = await usersCollection.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    const newUser = {
      name,
      email,
      password, 
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return NextResponse.json({ message: "User registered successfully", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
