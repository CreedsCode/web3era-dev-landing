import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-10 relative py-20">
      <h2 className="font-heading text-3xl font-semibold sm:text-4xl max-w-xl sm:leading-tight text-center">
        Help with research and development or stay updated!
      </h2>
      <p className="text-lg text-muted-foreground text-center max-w-xl">
        Web3 Era has been the result of the research and development of the open-source community,
        stay updated on the core maintainers&apos; Twitter account.
      </p>
      <Button
        size="lg"
        asChild
        variant="default"
        className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
      >
        <Link href="https://twitter.com/spanish_vanish">Twitter</Link>
      </Button>
    </section>
  );
}
