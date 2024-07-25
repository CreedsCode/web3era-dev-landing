import { Card, CardContent } from "@/components/ui/card";

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
        Reducing Worries with Web3 Implementations
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Account Abstraction</h4>
              <p className="text-muted-foreground">
                Using EIP-2771 and ERC-4773, we can go a long way in abstracting the users.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Off-Chain Storage</h4>
              <p className="text-muted-foreground">
                IPFS/Swarm and such is nothing we should be worried about; the SDK handles the
                off-chain storage and pinning.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">No Loading times!</h4>
              <p className="text-muted-foreground">
                We are experimenting with preemptive caching methods to enable a web2 native UX.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">ERC20 Management</h4>
              <p className="text-muted-foreground">
                Your own token, it&apos;s possible. Manage user rewards and more!
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">NFTS?</h4>
              <p className="text-muted-foreground">
                Even creating NFTs for certificates or art is possible with just 1 line of code.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">AI Helper</h4>
              <p className="text-muted-foreground">
                LLMs are the key interface for non-web3 developers to get hands-on implementation
                help!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
