import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-br from-slate-800 to-slate-500 flex items-center justify-center">
      <section className="flex flex-col space-y-5">
        <p className="text-6xl">🔐 Auth</p>
        <Link href={"/auth/register"} className="w-full">
          <Button variant={"secondary"} size={"lg"}>
            Sign In
          </Button>
        </Link>
      </section>
    </main>
  );
}
