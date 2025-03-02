"use client";
import { ICategory } from "@/types";
import { NMTable } from "@/components/ui/core/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import DiscountModal from "./DiscountModal";

type TCategoriesProps = {
  categories: ICategory[];
};

const ManageProducts = ({ categories }: TCategoriesProps) => {
  const router = useRouter();

  const [selectedIds, setSelectedIds] = useState<string[] | []>([]);
  const handleDelete = (data: ICategory) => {
    console.log(data);
  };

  const columns: ColumnDef<ICategory>[] = [
    {
      id: "select",
      // header: ({ table }) => (
      //   <Checkbox
      //     checked={
      //       table.getIsAllPageRowsSelected() ||
      //       (table.getIsSomePageRowsSelected() && "indeterminate")
      //     }
      //     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      //     aria-label="Select all"
      //   />
      // ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            if (value) {
              setSelectedIds((prev) => [...prev, row.original._id]);
            } else {
              setSelectedIds(
                selectedIds.filter((id) => id !== row.original._id)
              );
            }
            row.toggleSelected(!!value);
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => {
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>;
      },
    },
    {
      accessorKey: "isActive",
      header: () => <div>isActive</div>,
      cell: ({ row }) => {
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 bg-green-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>;
      },
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => {
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>;
      },
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold">Manage Products</h1>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/user/shop/products/add-product")}
            size="sm"
          >
            Add Product <Plus />
          </Button>
          <DiscountModal
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        </div>
      </div>
      <NMTable data={categories} columns={columns} />
    </div>
  );
};

export default ManageProducts;
