'use strict';
import { characterData } from '../data/marvel-character-data.js';
import { MarvelSvg } from './marvel-svg.js';
import { CharacterSearch } from './character-search.js';
import { SearchTypes, getSearchTypeComparer } from '../helpers/search-helpers.js';
import { CharacterListing } from './character-listing.js';
import { CharacterDetails } from './character-details.js';

const e = React.createElement;

export class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacterName: undefined,
      selectedCharacter: undefined,
      filterType: SearchTypes.CHARACTERS,
      filteredCharacterData: characterData
    };

    this.onSelectedCharacterChange = this.onSelectedCharacterChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
  }

  onSelectedCharacterChange(selectedCharacterName) {
    this.setState({selectedCharacterName: selectedCharacterName});
    let selectedCharacter = characterData[selectedCharacterName];
    selectedCharacter.name = selectedCharacterName;
    this.setState({selectedCharacter: selectedCharacter});
  }

  onSearchChange(searchText) {
    this.setState(function(state, props) {
      let newFilteredCharacters = {};
      let comparer = getSearchTypeComparer(state.filterType)
      newFilteredCharacters = searchText.length === 0 ? characterData : Object.keys(characterData).reduce(function (filtered, key) {
        if (comparer(searchText, key, characterData)) filtered[key] = characterData[key];
        return filtered;
      }, {});
      console.log('newFilteredCharacters length: ' + Object.keys(newFilteredCharacters).length);
      return {
        filteredCharacterData: newFilteredCharacters
      };
    });
  }

  onSearchTypeChange(searchType) {
    this.setState({'filterType': searchType});
  }

  render() {
    const footerStyle = {
      'paddingTop': '10px'
    };
    return (
      <div id="root">
        <header>
          <MarvelSvg></MarvelSvg>
          <div className="secondary-header">Character listing from Marvel movies</div>
        </header>
        <CharacterSearch onSearchChange={this.onSearchChange} onSearchTypeChange={this.onSearchTypeChange}></CharacterSearch>
        <CharacterListing 
          filteredCharacterData={this.state.filteredCharacterData}
          selectedCharacterName={this.state.selectedCharacterName}
          onSelectedCharacterChange={this.onSelectedCharacterChange}>
        </CharacterListing>
        <CharacterDetails selectedCharacter={this.state.selectedCharacter}></CharacterDetails>
        <footer style={footerStyle}>Fuse Code Camp 2019 - Introduction to the React Javascript library</footer>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Root), domContainer);