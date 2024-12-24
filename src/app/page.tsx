import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const MainMenu = () => (
  <div className="fixed inset-0 place-items-center grid">
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle className="text-center">Solitaire</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <Link className="w-full" href="play">
          <Button className="w-full">Play</Button>
        </Link>
        <Link className="w-full" href="https://bossweb.dev/projects/solitaire">
          <Button className="w-full">About</Button>
        </Link>
      </CardContent>
    </Card>
  </div>
);

export default function HomePage() {
  return (
    <>
      <Header items={{ right: ["Settings"] }} />
      <MainMenu />
    </>
  );
}
