import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import authConfig from "./auth.config";
import { db } from "@/lib/db";
import { LoginSchema } from "./app/auth/login/login-form";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email } = validatedFields.data;

          const user = await db.user.findFirst({
            where: { email },
          });
          return user;
        }
        if (credentials) {
        }
        // if (validatedFields.success) {
        //   const { email, password } = validatedFields.data;

        //   // const user = await getUserByEmail(email);
        //   const user = await db.user.findFirst();
        //   // if (!user || !user.password) return null;

        //   // const passwordsMatch = await bcrypt.compare(
        //   //   password,
        //   //   user.password,
        //   // );

        // const passwordsMatch = true;
        // if (passwordsMatch) return user;
        // }

        return null;
      },
    }),
  ],
});
