import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import ProductForm from "./product-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Product",
};

export default async function AddProduct() {
  const session = await auth();
  if (session?.user.role !== "admin") return redirect("/dashboard/settings");
  return <ProductForm />;
}
