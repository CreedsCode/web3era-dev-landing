import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Features</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          Everything behind a few lines of code for you.
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-center max-w-2xl">
        Don&apos;t be distracted with the details.
      </p>
      <div className="relative sm:mt-8">
        <Image
          alt="SaaS Dashboard"
          src="/images/Untitled-2024-07-14-0822.png"
          width={1000}
          height={698}
          priority
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
