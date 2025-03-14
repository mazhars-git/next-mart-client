import { IProduct } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div className="border-2 border-white rounded-3xl my-10 grid grid-cols-2 gap-8">
      <div>
        <Image
          src={product?.imageUrls[0]}
          width={500}
          height={500}
          alt="product image"
          className="rounded-md w-full object-cover h-80"
        />
        <div className="grid grid-cols-3 gap-4">
          {product?.imageUrls?.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              width={200}
              height={200}
              alt="product image"
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-md p-4">
        <h2 className="font-bold text-xl mb-3">{product?.name}</h2>
        <p className="text-justify text-gray-500 font-light text-sm">
          {product?.description}
        </p>
        <div>
          <Star className="w-4 h-4" fill="orange" stroke="orange" />

          <p>{product?.averageRating} Ratings</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
