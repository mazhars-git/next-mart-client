"use client";
import { ICategory } from "@/types";
import CreateCategoryModal from "./CreateCategoryModal";
import { NMTable } from "@/components/ui/core/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Trash } from "lucide-react";
import CreateBrandModal from "./CreateBrandModel";

type TCategoriesProps = {
  brands: ICategory[];
};

const ManageBrands = ({ brands }: TCategoriesProps) => {
  const handleDelete = (data: ICategory) => {
    console.log(data);
  };

  const columns: ColumnDef<ICategory>[] = [
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
        <h1 className="text-2xl font-bold">Manage Brands</h1>
        <CreateBrandModal />
      </div>
      <NMTable data={brands} columns={columns} />
    </div>
  );
};

export default ManageBrands;
