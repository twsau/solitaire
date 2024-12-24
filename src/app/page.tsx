import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header items={{ right: ["Settings"] }} />
      <div className="fixed inset-0 place-items-center grid">
        <Card className="w-full max-w-xs">
          <CardHeader>
            <CardTitle className="text-center">Solitaire</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Link href="play">
              <Button>Play</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
