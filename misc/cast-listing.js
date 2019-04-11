function updateCastListing() {
  var title = $('#firstHeading i').text();
  var castListingULs = $('.cast-listing');  //.children();
  castListingULs.each((ignored, castListingUL) => {
    $(castListingUL).children().each((ignored, element) => {
      var character = $(element).children().length > 1 ? $(element).children()[1].text : "";
      var actor = $(element).children().length > 0 ? $(element).children()[0].text : "";
      var fullDescription = $(element).text();
      var description = fullDescription.substring(fullDescription.indexOf(',') + 2);
      var storedCharacter = completeCastListing[character];
      if (storedCharacter) {
        storedCharacter.movies.push(title);
        if (storedCharacter.actors.indexOf(actor) === -1){
          storedCharacter.actors.push(actor);
        }
        storedCharacter.description = description;
      } else {
        completeCastListing[character] = {
          actors: [actor], 
          description: description,
          movies: [title]
        };
      }
    });
  });
}

updateCastListing()
JSON.stringify(completeCastListing);