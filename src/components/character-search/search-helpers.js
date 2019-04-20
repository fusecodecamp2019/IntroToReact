'use strict';

export const SearchTypes = {
  CHARACTERS: 'Search by character name',
  MOVIES: 'Search by movie name',
  ACTORS: 'Search by actor name'
};

export function getSearchTypeComparer(searchType) {
  if (searchType === SearchTypes.CHARACTERS) return compareByCharacterName;
  if (searchType === SearchTypes.MOVIES) return compareByMovieName;
  if (searchType === SearchTypes.ACTORS) return compareByActorName;
}

export function compareByCharacterName(searchText, characterKey, characterData) {
  return characterKey.toLowerCase().includes(searchText.toLowerCase());
}

export function compareByMovieName(searchText, characterKey, characterData) {
  let lowerCaseMovies = characterData[characterKey].movies.map(movie => movie.toLowerCase());
  return lowerCaseMovies.find(movie => movie.includes(searchText.toLowerCase()));
}

export function compareByActorName(searchText, characterKey, characterData) {
  let lowerCaseActors = characterData[characterKey].actors.map(actor => actor.toLowerCase());
  return lowerCaseActors.find(actor => actor.includes(searchText.toLowerCase()));
}