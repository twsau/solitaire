import { Header } from "@/components/Header";
import { Game } from "./Game";

export default function PlayPage() {
  return (
    <>
      <Header items={{ right: ["HowToPlay"] }} />
      <Game />
    </>
  );
}
