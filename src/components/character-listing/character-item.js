'use strict';

export class CharacterItem extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(characterName) {
    this.props.onSelectedCharacterChange(characterName);
  }

  render() {
    if (this.props.isSelected) {
      return (
        <li key={this.props.characterName} onClick={this.handleClick} className="character-selected" style={this.props.style}>{this.props.characterName}{this.props.children}</li>
      );
    }
    return (
      <li key={this.props.characterName} onClick={this.handleClick} style={this.props.style}>{this.props.characterName}{this.props.children}</li>
    );
  }
}
