"use server";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { getAllCategories } from "@/services/Category";
import { ICategory } from "@/types";
import Link from "next/link";

const Category = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <div className="container mx-auto my-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Category</h2>
        <Link href="/products">
          <Button className="rounded-full" variant="outline">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-4 my-5">
        {Array(12)
          .fill(categories?.[0])
          .map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Category;
