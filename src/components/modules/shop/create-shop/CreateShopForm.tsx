"use client";
import { Button } from "@/components/ui/button";
import MNImageUploader from "@/components/ui/core/NMImageUploader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const CreateShopForm = () => {
  const form = useForm({});

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <div className="flex itemx-center space-x-4">
        <h1 className="text-3xl font-bold">NMart</h1>
        <div>
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="font-extralight text-sm text-gray-600">
            Join us today and start your journey
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-5" type="submit">
            Create Shop
          </Button>
        </form>
      </Form>
      <MNImageUploader />
    </div>
  );
};

export default CreateShopForm;
