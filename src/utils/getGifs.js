const getGifs = async (category) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&api_key=QRbDB1AVN90FjzJ63W0SlJEKAsshRKJ4&limit=10`
  );
  const { data } = await response.json();
  return data;
};
export default getGifs;
