import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 pt-20 sm:gap-10">
      <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary hover:bg-secondary/60 py-1 px-4">
        <span className="text-sm text-secondary-foreground">New Demo</span>
        <ArrowRight size={16} />
      </div>
      <h1 className="text-center font-heading text-4xl font-semibold sm:text-5xl sm:leading-tight max-w-5xl">
        Build trustless systems like firebase
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        Check out our latest demo showing the first app built on web3era, featuring gasless
        transactions.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <Button
          size="lg"
          asChild
          variant="outline"
          className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
        >
          <Link href="https://github.com/CreedsCode/web3era-toy">Learn More</Link>
        </Button>
        <Button
          size="lg"
          asChild
          className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
        >
          <Link href="https://try.web3era.dev">Start Demo</Link>
        </Button>
      </div>
      <div className="relative sm:mt-8">
        <Image
          alt="SaaS Dashboard"
          src="/images/New-Project-(2).webp"
          width={1000}
          height={698}
          priority
          className="rounded-xl"
        />
        <div className="absolute inset-0 -z-10 [filter:blur(180px)] bg-primary/10" />
      </div>
    </section>
  );
}
