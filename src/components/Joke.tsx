import { Button } from "./ui/button";
import { toast } from "sonner";
import { useSettings } from "@/state/settings";

export const Joke = () => {
  const locale = useSettings((state) => state.locale);

  const getJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) toast(data.joke);
        else toast("Not right now...");
      });
  };

  if (locale !== "en") return null;

  return <Button onClick={getJoke}>Tell me a joke!</Button>;
};
