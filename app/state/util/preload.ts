const images = [
  "/cards/backs/1.png",
  "/cards/backs/2.png",
  "/cards/backs/3.png",
  "/cards/backs/4.png",
  "/cards/backs/5.png",
  "/cards/backs/6.png",
  "/cards/backs/7.png",
  "/cards/backs/8.png",
  "/cards/clubs/1.png",
  "/cards/clubs/2.png",
  "/cards/clubs/3.png",
  "/cards/clubs/4.png",
  "/cards/clubs/5.png",
  "/cards/clubs/6.png",
  "/cards/clubs/7.png",
  "/cards/clubs/8.png",
  "/cards/clubs/9.png",
  "/cards/clubs/10.png",
  "/cards/clubs/11.png",
  "/cards/clubs/12.png",
  "/cards/clubs/13.png",
  "/cards/diamonds/1.png",
  "/cards/diamonds/2.png",
  "/cards/diamonds/3.png",
  "/cards/diamonds/4.png",
  "/cards/diamonds/5.png",
  "/cards/diamonds/6.png",
  "/cards/diamonds/7.png",
  "/cards/diamonds/8.png",
  "/cards/diamonds/9.png",
  "/cards/diamonds/10.png",
  "/cards/diamonds/11.png",
  "/cards/diamonds/12.png",
  "/cards/diamonds/13.png",
  "/cards/hearts/1.png",
  "/cards/hearts/2.png",
  "/cards/hearts/3.png",
  "/cards/hearts/4.png",
  "/cards/hearts/5.png",
  "/cards/hearts/6.png",
  "/cards/hearts/7.png",
  "/cards/hearts/8.png",
  "/cards/hearts/9.png",
  "/cards/hearts/10.png",
  "/cards/hearts/11.png",
  "/cards/hearts/12.png",
  "/cards/hearts/13.png",
  "/cards/spades/1.png",
  "/cards/spades/2.png",
  "/cards/spades/3.png",
  "/cards/spades/4.png",
  "/cards/spades/5.png",
  "/cards/spades/6.png",
  "/cards/spades/7.png",
  "/cards/spades/8.png",
  "/cards/spades/9.png",
  "/cards/spades/10.png",
  "/cards/spades/11.png",
  "/cards/spades/12.png",
  "/cards/spades/13.png",
];

export async function preload() {
  const imagePromises = images.map((image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = image;
    });
  });

  return Promise.all(imagePromises);
}
