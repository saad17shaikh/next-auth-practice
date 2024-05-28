import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
//   import { RiEyeCloseFill } from "react-icons/ri";
//   import { BsEyeFill } from "react-icons/bs";

type FormProps = {
  form: any;
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  type: string;
  disabledStr?: string;
  disable?: boolean;
  isRequired?: boolean;
};

const FormInput = ({
  form,
  name,
  label,
  placeholder,
  className,
  type,
  isRequired,
  disable,
}: FormProps) => {
  const [show, setShow] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className, "mb-3")}>
          <FormLabel className=" md:text-base text-gray-800 dark:text-gray-300">
            {label}
            {isRequired && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            {type === "password" ? (
              <div className="relative">
                <Input
                  type={show ? "text" : "password"}
                  placeholder={placeholder}
                  {...field}
                  className="bg-gray-200 dark:bg-gray-700 border-none dark:border-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-100/50 !outline-rose-400 "
                  // onPaste={(e) => e.preventDefault()}
                />{" "}
                {show ? (
                  <EyeOpenIcon
                    className="absolute right-2 top-3 cursor-pointer w-5 h-5 dark:text-gray-200 text-gray-600"
                    onClick={() => setShow(!show)}
                  />
                ) : (
                  <EyeClosedIcon
                    className="absolute right-2 top-3 cursor-pointer w-5 h-5 dark:text-gray-200 text-gray-600"
                    onClick={() => setShow(!show)}
                  />
                )}
              </div>
            ) : (
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disable}
                className="bg-gray-200 dark:bg-gray-700 border-none dark:border-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-100/50 outline-none focus:!outline-rose-400"
              />
            )}
          </FormControl>
          <FormMessage className="tracking-wider" />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
