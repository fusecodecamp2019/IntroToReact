function transformListing(listing) {
  var transformed = {};
  Object.keys(listing).forEach((key) => {
    var oldElement = listing[key];
    transformed[key] = {
      actors: oldElement.actors,
      description: oldElement.description,
      movies: oldElement.movies
    };
  });
  return transformed;
}