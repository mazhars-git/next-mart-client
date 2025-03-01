import { IProduct } from "@/types";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../card";
import Image from "next/image";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={product?.imageUrls[0] || "https://"}
          width={500}
          height={500}
          alt="product image"
          className="rounded-sm h-48 object-cover"
        />
        {product?.stock === 0 && (
          <div className="absolute left-2 top-0 bg-red-500 text-white px-2 rounded-full">
            Out of Stock
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
