'use strict';
import { SearchTypes } from './search-helpers.js';

export class SearchSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSearchTypeChange(event.target.value)
    this.setState(function(state, props) {
      
    });
  }

  render() {
    return (
        <select style={this.props.style} onChange={this.handleChange}>
          {
            Object.keys(SearchTypes).map((key) => {
              return <option key={key} value={SearchTypes[key]}>{SearchTypes[key]}</option>;
            })
          }
        </select>
    );
  }
}