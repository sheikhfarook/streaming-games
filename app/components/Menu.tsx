"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  name: z.string({
    required_error: "Please enter a game title .",
  }),
  imageUrl: z
    .string({
      required_error: "Please provide a valid URL.",
    })
    .url({
      message: "Please enter a valid URL starting with http:// or https://",
    }),
  profileurl: z
    .string({
      required_error: "Please provide a valid URL.",
    })
    .url({
      message: "Please enter a valid URL starting with http:// or https://",
    }),
  status: z.string({
    required_error: "Please select a status.",
  }),
});

const Menupage = ({
  statusSelected,
}: {
  statusSelected: (value: string) => void;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div>
      <div className="flex fixed top-0 w-full justify-between p-7 text-2xl border-2 border-black z-50 mb-8 bg-white/80 backdrop-blur-sm">
        <div className="font-bold text-[40px]">Game Stream</div>
        <div className="flex gap-4">
          <Select onValueChange={(value) => statusSelected(value)}>
            <SelectTrigger className="w-[180px] p-5 font-semibold border-none bg-white">
              <SelectValue placeholder="Status of game" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Games Status</SelectLabel>
                <SelectItem value="all-games">All Games</SelectItem>
                <SelectItem value="streamed">Streamed</SelectItem>
                <SelectItem value="in-progress">In-progress</SelectItem>
                <SelectItem value="online">Online</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Dialog>
            <DialogTrigger>
              <Button className="font-bold bg-purple-500 text-white border-none p-5">
                Add Game
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Game</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Game Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Game TItle name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Status of game" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Games Status</SelectLabel>
                              <SelectItem value="streamed">Streamed</SelectItem>
                              <SelectItem value="in-progress">
                                In-progress
                              </SelectItem>
                              <SelectItem value="online">Online</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image Url</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="paste here playlist URl link"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profileurl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profile Url</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="paste here playlist URl link"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Menupage;
