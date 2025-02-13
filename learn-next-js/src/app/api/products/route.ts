import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Product from "@/lib/models/product";

export const GET = async () => {
  try {
    await connect();
    const products = await Product.find();
    console.log(products);
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 });
  }
}

// export async function POST(req: Request) {
//   try {
//     await connect();
//     const body = await req.json();
//     const newProduct = new Product(body);
//     await newProduct.save();
//     return NextResponse.json({ success: true, data: newProduct }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ success: false, message: "Failed to create product" }, { status: 500 });
//   }
// }
