"use server";
import { db } from "./db";
import bcrypt from "bcrypt";

export const register = async (formData: any) => {
  const { email, password, name } = formData;
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
