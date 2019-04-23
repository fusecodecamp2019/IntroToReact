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
    const styleForUL = {
      'listStyle': 'none',
      'padding': 0,
      'margin': 0
    };
    const stylesForElement = Object.assign({
      'cursor': 'pointer',
      'paddingTop': '5px',
      'paddingRight': '10px',
      'paddingBottom': '5px'
    }, this.props.generalLeftPadding);
    return (
      <aside className="character-listing" style={this.props.style}>
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
      </aside>
    );
  }
}
