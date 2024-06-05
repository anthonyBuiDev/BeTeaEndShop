"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProductSchema, zProductSchema } from "@/types/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

import { useForm } from "react-hook-form";
import Tiptap from "./tiptap";

export default function ProductForm() {
  const form = useForm<zProductSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
    },
    mode: "onChange",
  });
  // const { execute, status } = useAction(createProduct, {
  //   onSuccess: (data) => {
  //     if (data?.error) {
  //       toast.error(data.error);
  //     }
  //     if (data?.success) {
  //       router.push("/dashboard/products");
  //       toast.success(data.success);
  //     }
  //   },
  //   onExecute: (data) => {
  //     if (editMode) {
  //       toast.loading("Editing Product");
  //     }
  //     if (!editMode) {
  //       toast.loading("Creating Product");
  //     }
  //   },
  // });
  async function onSubmit(values: zProductSchema) {
    // execute(values);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle> Create Product</CardTitle>
        <CardDescription>Add a brand new product</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Saekdong Stripe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Tiptap val={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Price</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <DollarSign
                        size={36}
                        className="rounded-md bg-muted  p-2"
                      />
                      <Input
                        {...field}
                        type="number"
                        placeholder="Your price in USD"
                        step="0.1"
                        min={0}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              // disabled={
              //   status === "executing" ||
              //   !form.formState.isValid ||
              //   !form.formState.isDirty
              // }
              // type="submit"
            >
              Create Product
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
