import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { IKImage } from "imagekitio-next";

type ProductType = {
  excerpt?: string;
  images?: string[];
  name?: string;
  price?: number;
  slug?: string;
  _id?: string;
};

interface CardProductProps {
  product?: ProductType;
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function CardProduct({ product }: CardProductProps) {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <IKImage
          urlEndpoint={urlEndpoint}
          path={product?.images ? product.images[0] : "default-image.jpg"}
          fill={true}
          alt={product?.name ? product.name : "name"}
        />
      </CardContent>
      <CardFooter>
        <CardDescription>{product?.excerpt}</CardDescription>
      </CardFooter>
      <CardFooter>
        <p>{product?.price}</p>
        <Button onClick={() => router.push(`/products/${product?.slug}`)}>
          Check Out
        </Button>
      </CardFooter>
    </Card>
  );
}
