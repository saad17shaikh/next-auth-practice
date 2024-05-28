"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { register } from "@/lib/server-action";
import CardWrapper from "@/app/_components/CardWrapper";
import FormInput from "@/app/_components/FormInput";
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values).then((data) => {
        setMessage(data.message);
      });
    });
  };
  return (
    <main className="h-screen bg-gradient-to-br from-slate-700 to-slate-500 flex items-center justify-center ">
      <CardWrapper headerLabel="Register" showSocial>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormInput
                form={form}
                label="Name"
                name="name"
                placeholder=""
                type="text"
                isRequired
              />
              <FormInput
                form={form}
                label="Email"
                name="email"
                placeholder=""
                type="email"
                isRequired
              />
              <FormInput
                form={form}
                label="Password"
                name="password"
                placeholder=""
                type="password"
                isRequired
              />
            </div>
            {message && (
              <p className="p-2 bg-emerald-600/40 rounded-md">{message}</p>
            )}
            <Button disabled={isPending} type="submit" className="w-full">
              Create an account
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </main>
  );
};

export default RegisterForm;
