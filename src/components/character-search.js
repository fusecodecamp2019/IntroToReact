'use strict';
import { SearchSelector } from './search-selector.js';

export class CharacterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textEntered: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
  }

  handleChange(event) {
    this.setState({textEntered: event.target.value});
    if (event.target.value && event.target.value.length > 2) {
      console.log('searchText changed to: ' + event.target.value);
      this.props.onSearchChange(event.target.value);
    } else {
      this.props.onSearchChange('')
    }
  }

  handleSearchTypeChange(searchType) {
    this.props.onSearchTypeChange(event.target.value);
    this.setState({'textEntered': ''})
    this.props.onSearchChange('');
  }

  render() {
    const inputStyling = {
      "padding": "2px 10px"
    };
    return (
      <div className="character-search">
        <div>
          <input type="text" style={inputStyling} value={this.state.textEntered} onChange={this.handleChange} />
        </div>
        <div>
          <SearchSelector onSearchTypeChange={this.handleSearchTypeChange}></SearchSelector>
        </div>
      </div>
    );
  }
}