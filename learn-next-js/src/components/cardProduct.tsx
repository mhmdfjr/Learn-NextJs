import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type ProductType = {
  excerpt: string;
  images: string[];
  name: string;
  price: number;
  slug: string;
  _id: string;
};

interface CardProductProps {
  product: ProductType;
}

export default function CardProduct({ product }: CardProductProps) {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={product.images[0]} fill={true} alt={product.name} />
      </CardContent>
      <CardFooter>
        <CardDescription>{product.excerpt}</CardDescription>
      </CardFooter>
      <CardFooter>
        <p>{product.price}</p>
        <Button onClick={() => router.push(`/products/${product.slug}`)}>
          Check Out
        </Button>
      </CardFooter>
    </Card>
  );
}
