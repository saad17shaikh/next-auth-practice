"use server";
import { LoginSchema } from "@/app/auth/login/login-form";
import { db } from "./db";
import bcrypt from "bcrypt";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
export const register = async (formData: any) => {
  const { email, password, name } = formData;
  console.log(formData)
  const isAlreadyExist = await db.user.findFirst({
    where: { email },
  });
  if (isAlreadyExist) {
    return { success: true, message: "User already exists" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
  return { success: true, message: "User created" };
};

export const login = async (formData: any) => {
  // const validatedFields = LoginSchema.safeParse(formData);
  // if (!validatedFields.success) {
  //   return { success: false, message: "Invalid fields" };
  // }
  const { email, password } = formData;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/settings",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return {success:false,message:"Invalid Credentials"}
        }
      }
    }
    throw error
  }
};
