import Image from "next/image";

export function Technologies() {
  return (
    <section className="container flex flex-col items-center gap-10 py-24 relative">
      <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
        Built for developers, Developed for consumers
      </h2>
      <p className="max-w-2xl text-center text-lg text-muted-foreground">
        The goal is to avoid unnecessary mental hurdles. Why learn Web3 if it could be as easy as a
        MongoDB implementation?
      </p>
      <div className="relative sm:mt-8">
        <Image
          alt="SaaS Dashboard"
          src="/images/Untitled-2024-06-10-1423.png"
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
