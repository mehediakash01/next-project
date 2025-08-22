"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import ProductForm from "./ProductForm";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // redirect to login
    }
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null; // hide form until session is ready

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      {/* <ProductForm /> */}
    </div>
  );
}
