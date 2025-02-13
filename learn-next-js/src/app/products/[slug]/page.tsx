"use client";

import { useEffect, useState } from "react";
import { fetchProduct } from "./action";
import Image from "next/image";
import { useParams } from "next/navigation";

type ProductType = {
  name: string;
  description: string;
  excerpt: string;
  images: string[];
  price: number;
  slug: string;
};

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function loadProduct() {
      const data = await fetchProduct(slug as string);
      setProduct(data);
      setLoading(false);
    }

    loadProduct();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.images.length > 0 && (
        <Image
          src={product.images[0]}
          width={400}
          height={400}
          alt={product.name}
        />
      )}
    </div>
  );
};

export default ProductPage;
