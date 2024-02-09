export default function preload() {
  const preloadedLinks = document.querySelectorAll('link[rel="preload"]');

  const promises = Array.from(preloadedLinks).map(
    (link) =>
      new Promise<void>((resolve, reject) => {
        const img = new Image();
        const src = link.getAttribute("href") as string;
        if (!src) console.error(`no src found: ${link}`);

        img.src = src;
        img.onload = () => resolve();
        img.onerror = () =>
          reject(`${link.getAttribute("href")} failed to load`);
      })
  );

  return Promise.all(promises);
}
