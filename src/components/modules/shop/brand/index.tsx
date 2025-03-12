"use client";
import { IBrand } from "@/types";
import { NMTable } from "@/components/ui/core/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Trash } from "lucide-react";
import CreateBrandModal from "./CreateBrandModel";

const ManageBrands = ({ brands }: { brands: IBrand[] }) => {
  console.log(brands);
  const handleDelete = (data: IBrand) => {
    console.log(data);
  };

  const columns: ColumnDef<IBrand>[] = [
    {
      accessorKey: "name",
      header: () => <div>Brand Name</div>,
      cell: ({ row }) => {
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.logo}
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
      <NMTable columns={columns} data={brands || []} />
    </div>
  );
};

export default ManageBrands;
