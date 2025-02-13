"use client";
import CardProduct from "@/components/cardProduct";
import { fetchProducts } from "./action";
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
  id: string;
};

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data.data);
    }
    loadProducts();
  }, []);

  return (
    <div className="p-10">
      <div className="flex flex-wrap gap-6 justify-center">
        {products.length ? (
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
