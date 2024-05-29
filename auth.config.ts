import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

import { db } from "./lib/db";
import { LoginSchema } from "./app/auth/login/login-form";

export default {
  providers: [
    // Credentials({
    //   async authorize(credentials) {
    //     const validatedFields = LoginSchema.safeParse(credentials);
    //     // if(credentials){

    //     // }
    //     // if (validatedFields.success) {
    //     //   const { email, password } = validatedFields.data;

    //     //   // const user = await getUserByEmail(email);
    //     //   const user = await db.user.findFirst();
    //     //   // if (!user || !user.password) return null;

    //     //   // const passwordsMatch = await bcrypt.compare(
    //     //   //   password,
    //     //   //   user.password,
    //     //   // );

    //     //   const passwordsMatch = true;
    //     //   if (passwordsMatch) return user;
    //     // }

    //     return null;
    //   },
    // }),
  ],
} satisfies NextAuthConfig;
