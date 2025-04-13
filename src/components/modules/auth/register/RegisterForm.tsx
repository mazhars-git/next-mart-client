"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registrationSchema } from "./registerValidation";
import { registerUser } from "@/services/AuthService";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const { setIsLoading } = useUser();

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch("password");
  const passwordConfirm = form.watch("passwordConfirm");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
      console.log(res);
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
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem className="mt-3">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                {passwordConfirm && password !== passwordConfirm ? (
                  <FormMessage>Password does not match</FormMessage>
                ) : (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />
          <Button
            disabled={passwordConfirm && password !== passwordConfirm}
            className="w-full mt-5"
            type="submit"
          >
            {isSubmitting ? "Registering... " : "Register"}
            Register
          </Button>
        </form>
      </Form>
      <p className="text-center pt-3">
        Already have an account?{" "}
        <Link className="text-purple-500 font-semibold" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
