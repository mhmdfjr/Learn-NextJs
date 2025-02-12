/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import CardProduct from "@/components/card/cardProduct";
import { fetchProduct } from "./action";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

type ProductType = {
  createdAt: string;
  description: string;
  excerpt: string;
  images: string[];
  name: string;
  price: number;
  slug: string;
  tags: string[];
  thumbnail: string;
  updatedAt: string;
  _id: string;
};

const Products = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      if (typeof slug === "string") {
        const data = await fetchProduct(slug);
        setProduct(data.data);
        console.log(data);
      }
    }
    loadProduct();
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <div className="flex flex-wrap gap-6 justify-center">
        <CardProduct product={product} />
      </div>
    </div>
  );
};

export default Products;
