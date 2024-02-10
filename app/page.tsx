import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <div className="flex flex-col gap-3 mx-auto absolute inset-0 max-w-40 justify-center">
        <Button asChild>
          <Link href="/play">Play</Link>
        </Button>
        <Button asChild>
          <a href="https://bossweb.dev/project/solitaire">About</a>
        </Button>
      </div>
    </main>
  );
}
