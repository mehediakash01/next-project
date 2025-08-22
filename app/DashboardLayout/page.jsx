"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import ProductForm from "./ProductForm";


export default function AddProductPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  return (
    <div className="p-10 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>
      <ProductForm/>
    </div>
  );
}
