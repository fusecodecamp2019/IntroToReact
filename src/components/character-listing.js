'use strict';

export class CharacterListing extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onSelectedCharacterChange(e.target.textContent);
  }

  render() {
    const styleForUlContainer = {
      'overflowY': 'auto'
    };
    const styleForUL = {
      'listStyle': 'none',
      'padding': 0,
      'margin': 0,
      'overflowY': 'auto'
    };
    const stylesForElement = {
      'cursor': 'pointer',
      'padding': '5px'
    };
    return (
      <div className="character-listing">
        <div style={styleForUlContainer}>
          <ul style={styleForUL}>
            {
              Object.keys(this.props.filteredCharacterData).map((key) => {
                if (key == this.props.selectedCharacterName) {
                  return <li key={key} onClick={this.handleClick} className="character-selected" style={stylesForElement}>{key}</li>
                } else {
                  return <li key={key} onClick={this.handleClick} style={stylesForElement}>{key}</li>
                }
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
