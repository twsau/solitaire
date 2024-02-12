import { useEffect, useState } from "react";

export default function useDoubleClick(delay = 300) {
  const [clickCount, setClickCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState<Timer | null>(null);

  useEffect(() => {
    function handleClick() {
      if (clickCount === 0) {
        setClickCount(1);
        setTimeoutId(
          setTimeout(() => {
            setClickCount(0);
          }, delay)
        );
      } else setTimeoutId(setTimeout(() => setClickCount(0), 300));
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [clickCount, delay, timeoutId]);

  return clickCount > 0;
}
