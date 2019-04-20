'use strict';
import { SearchTypes } from '../helpers/search-helpers.js';

export class SearchSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSearchTypeChange(event.target.value)
  }

  render() {
    return (
        <select onChange={this.handleChange}>
          {
            Object.keys(SearchTypes).map((key) => {
              return <option value={SearchTypes[key]}>{SearchTypes[key]}</option>;
            })
          }
        </select>
    );
  }
}