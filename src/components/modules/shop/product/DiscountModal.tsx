"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addFlashSale } from "@/services/FlashSale";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TModalProps = {
  selectedIds: string[];
  setSelectedIds: Dispatch<SetStateAction<string[] | []>>;
};

const DiscountModal = ({ selectedIds, setSelectedIds }: TModalProps) => {
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const modifiedData = {
      products: [...selectedIds],
      discountPercentage: parseFloat(data?.discountPercentage),
    };
    try {
      const res = await addFlashSale(modifiedData);
      if (res.success) {
        toast.success(res.message);
        setSelectedIds([]);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={!selectedIds?.length} size="sm">
            Add Flash Sale <Plus />{" "}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Flash Sale</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex items-center justify-between space-x-3 mt-10">
                <FormField
                  control={form.control}
                  name="discountPercentage"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          value={field.value || ""}
                          className="rounded-sm w-56"
                          placeholder="Discount Percentage"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  {isSubmitting ? "Adding... " : "Add"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DiscountModal;
