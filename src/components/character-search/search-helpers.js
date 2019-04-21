'use strict';
import {
  characterData
} from '../../data/marvel-character-data.js';

export const SearchTypes = {
  CHARACTERS: 'Search by character name',
  MOVIES: 'Search by movie name',
  ACTORS: 'Search by actor name'
};

export function getSearchEvaluator(searchType) {
  if (searchType === SearchTypes.CHARACTERS) return evaluateByCharacterName;
  if (searchType === SearchTypes.MOVIES) return evaluateByMovieName;
  if (searchType === SearchTypes.ACTORS) return evaluateByActorName;
}

export function filterCharacterData(searchText, evaluatorFunction, filteringOptions) {
  let filteredCharacters = characterData;
  filteredCharacters = filterBySearchText(filteredCharacters, searchText, evaluatorFunction);
  if(filteringOptions && filteringOptions.isFilteringForAvengersOnly) {
    filteredCharacters = filterForAvengersOnly(filteredCharacters);
  }
  return filteredCharacters;
}

function filterBySearchText(sourceData, searchText, evaluatorFunction) {
  if (searchText.length === 0) {
    return characterData;
  }
  let filteredCharacters = Object.keys(sourceData).reduce(function (filtered, key) {
    if (evaluatorFunction(searchText, key, sourceData[key])) {
      filtered[key] = sourceData[key];
    }
    return filtered;
  }, {});
  return filteredCharacters;
}

function filterForAvengersOnly(sourceData) {
  let avengersOnly = Object.keys(sourceData).reduce(function (filtered, key) {
    if (sourceData[key].isHero) {
      filtered[key] = sourceData[key];
    }
    return filtered;
  }, {});
  return avengersOnly;
}

function evaluateByCharacterName(searchText, characterKey, CharacterToEvaluate) {
  return characterKey.toLowerCase().includes(searchText.toLowerCase());
}

function evaluateByMovieName(searchText, characterKey, CharacterToEvaluate) {
  let lowerCaseMovies = CharacterToEvaluate.movies.map(movie => movie.toLowerCase());
  return lowerCaseMovies.find(movie => movie.includes(searchText.toLowerCase()));
}

function evaluateByActorName(searchText, characterKey, CharacterToEvaluate) {
  let lowerCaseActors = CharacterToEvaluate.actors.map(actor => actor.toLowerCase());
  return lowerCaseActors.find(actor => actor.includes(searchText.toLowerCase()));
}