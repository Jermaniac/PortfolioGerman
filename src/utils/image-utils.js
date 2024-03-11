const getImageURL = (name) => {
  console.log(new URL(`../assets/gifs/${name}`, import.meta.url));
  return new URL(`../assets/gifs/${name}`, import.meta.url).pathname;
};

export { getImageURL };
