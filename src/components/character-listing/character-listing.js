'use strict';
import { CharacterItem } from './character-item.js';
import { AvengersIcon } from '../avengers-icon.js';

export class CharacterListing extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('handleClick - CharacterListing');
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
              let supplementalContent;
              if (this.props.filteredCharacterData[key].isHero) {
                supplementalContent = <AvengersIcon></AvengersIcon>;
              }
              return (
                <CharacterItem
                  key={key}
                  characterName={key} 
                  onSelectedCharacterChange={this.handleClick} 
                  style={stylesForElement}
                  isSelected={key == this.props.selectedCharacterName}>
                  {supplementalContent}
                </CharacterItem>
              );
            })
          }
        </ul>
      </aside>
    );
  }
}
