'use strict';
import { SearchSelector } from './search-selector.js'
import { CharacterFiltering } from './character-filtering.js';

export class CharacterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'searchTextEntered': props.searchText
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
  }

  handleSearchTextChange(event) {
    console.log('searchTextEntered: ' + event.target.value);
    this.setState({'searchTextEntered': event.target.value});
    this.props.onSearchTextChange(event.target.value.length > 2 ? event.target.value : '');
  }

  handleSearchTypeChange(searchType) {
    this.props.onSearchTypeChange(searchType);
    this.props.onSearchTextChange('');
  }

  render() {
    const stretchStyling = {
      'width': '100%',
      'height': '100%'
    };
    const inputStyling = Object.assign({
      "padding": "2px 10px"
    }, stretchStyling);
    return (
      <div className="character-search">
        <div>
          <input type="text" style={inputStyling} value={this.state.searchTextEntered} onChange={this.handleSearchTextChange} />
        </div>
        <div>
          <SearchSelector style={stretchStyling} onSearchTypeChange={this.handleSearchTypeChange}></SearchSelector>
        </div>
        <div>
          <CharacterFiltering 
            isFilteringForAvengersOnly={this.props.isFilteringForAvengersOnly}
            onAvengersOnlyFilterChange={this.props.onAvengersOnlyFilterChange}>
          </CharacterFiltering>
        </div>
      </div>
    );
  }
}