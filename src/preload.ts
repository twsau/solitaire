export default async function preload() {
  const preloadedLinks = document.querySelectorAll('link[rel="preload"]');
  preloadedLinks.forEach((link) => {
    const img = new Image();
    img.src = link.getAttribute("href") as string;

    img.onerror = () => {
      console.log(`${link.getAttribute("href")} failed to load`);
    };
  });
}
