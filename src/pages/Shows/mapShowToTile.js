const mapShowToTile = (show) => {
  const image = show.images['Poster Art'];

  return {
    id: show.title, // TODO - a real id
    image,
    href: `/shows/${show.title}`, // TODO should be an id
    ...show,
  };
};

export default mapShowToTile;