import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Product from "@/lib/models/product";

export const GET = async (_: Request, { params }: { params: { slug: string } }) => {
  try {
    await connect();
    const { slug } = params;

    if (!slug) {
      return NextResponse.json({ success: false, message: "Slug is required" }, { status: 400 });
    }

    const product = await Product.findOne({ slug });

    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch product" }, { status: 500 });
  }
};
