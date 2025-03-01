import { IProduct } from "@/types";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card className="p-3">
      <CardHeader className="relative p-0 h-48">
        <Image
          src={
            product?.imageUrls[0] ||
            "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
          }
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
        <Link href={`/products/${product?._id}`} passHref>
          <CardTitle title={product?.name}>
            {product?.name.length > 30
              ? product?.name?.slice(0, 30) + "..."
              : product?.name}
          </CardTitle>
        </Link>

        <div className="flex items-center justify-center my-2">
          <p className="text-sm text-gray-600">
            {product?.offerPrice ? (
              <>
                <span className="font-semibold mr-2 text-orange-400">
                  $ {product?.offerPrice}
                </span>
                <del className="font-semibold text-xs">$ {product?.price}</del>
              </>
            ) : (
              <span className="font-semibold">$ {product?.price}</span>
            )}
          </p>
          <div className="flex items-center justify-center gap-1">
            <Star className="w-4 h-4" fill="orange" stroke="orange" />
            <span className="text-sm font-medium text-gray-700">
              {product?.averageRating}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 items-center justify-between">
          <Button
            disabled={product?.stock === 0}
            size="sm"
            variant="outline"
            className="w-32"
          >
            Buy Now
          </Button>
          <Button
            disabled={product?.stock === 0}
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
          >
            <ShoppingCart />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
          >
            <Heart />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
