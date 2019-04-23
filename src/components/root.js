'use strict';
import { characterData } from '../data/marvel-character-data.js';
import { MarvelSvg } from './marvel-svg.js';
import { CharacterListing } from './character-listing.js';
import { SearchTypes, getSearchEvaluator, filterCharacterData } from './character-search/search-helpers.js';
import { CharacterSearch } from './character-search/character-search.js';
import { CharacterDetails } from './character-details/character-details.js';

const e = React.createElement;

export class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacterName: undefined,
      selectedCharacter: undefined,
      searchText: '',
      filterType: SearchTypes.CHARACTERS,
      isFilteringForAvengersOnly: false,
      filteredCharacterData: characterData
    };

    this.onSelectedCharacterChange = this.onSelectedCharacterChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
    this.onAvengersOnlyFilterChange = this.onAvengersOnlyFilterChange.bind(this);
  }

  onSelectedCharacterChange(selectedCharacterName) {
    this.setState({selectedCharacterName: selectedCharacterName});
    let selectedCharacter = characterData[selectedCharacterName];
    selectedCharacter.name = selectedCharacterName;
    this.setState({selectedCharacter: selectedCharacter});
  }
 
  onSearchTextChange(searchText) {
    this.setState(function(state) {
      console.log('onSearchTextChange: ' + searchText);
      let newFilteredCharacters = this.getUpdatedFilteredCharacterData(searchText, state.filterType, state.isFilteringForAvengersOnly);
      return {
        searchText: searchText,
        filteredCharacterData: newFilteredCharacters
      };
    });
  }

  onSearchTypeChange(searchType) {
    this.setState({'filterType': searchType});
  }

  onAvengersOnlyFilterChange() {
    this.setState(function(state) {
      let isFilteringForAvengersOnly = !state.isFilteringForAvengersOnly;
      console.log('isFilteringForAvengersOnly: ' + isFilteringForAvengersOnly);
      let newFilteredCharacters = this.getUpdatedFilteredCharacterData(state.searchText, state.filterType, isFilteringForAvengersOnly);
      return {
        'isFilteringForAvengersOnly': isFilteringForAvengersOnly,
        filteredCharacterData: newFilteredCharacters
      }
    });
  }

  getUpdatedFilteredCharacterData(providedSearchText, filterType, isFilteringForAvengersOnly) {
    let comparer = getSearchEvaluator(filterType)
    let newFilteredCharacters = filterCharacterData(
      providedSearchText, 
      comparer, 
      {isFilteringForAvengersOnly: isFilteringForAvengersOnly});
    console.log('newFilteredCharacters length: ' + Object.keys(newFilteredCharacters).length);
    return newFilteredCharacters;
  }

  render() {
    const generalLeftPadding = {
      'paddingLeft': '10px'
    };
    const footerStyle = Object.assign({
      'paddingTop': '10px'
    }, generalLeftPadding);
    return (
      <div id="root">
        <header style={generalLeftPadding}>
          <MarvelSvg></MarvelSvg>
          <div className="secondary-header">Character listing from Marvel movies</div>
        </header>
        <CharacterSearch
          generalLeftPadding={generalLeftPadding}
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange} 
          onSearchTypeChange={this.onSearchTypeChange}
          isFilteringForAvengersOnly={this.state.isFilteringForAvengersOnly}
          onAvengersOnlyFilterChange={this.onAvengersOnlyFilterChange}>
        </CharacterSearch>
        <CharacterListing
          generalLeftPadding={generalLeftPadding}
          filteredCharacterData={this.state.filteredCharacterData}
          selectedCharacterName={this.state.selectedCharacterName}
          onSelectedCharacterChange={this.onSelectedCharacterChange}>
        </CharacterListing>
        <CharacterDetails 
          generalLeftPadding={generalLeftPadding}
          selectedCharacter={this.state.selectedCharacter}>
        </CharacterDetails>
        <footer style={footerStyle}>Fuse Code Camp 2019 - Introduction to the React Javascript library</footer>
      </div>
    );
  }
}




const domContainer = document.querySelector('#react-root');
ReactDOM.render(e(Root), domContainer);