export class CharacterListing extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onSelectedCharacterChange(event.target.textContent);
  }

  render() {
    return (
      <aside className="character-listing">
        <ul>
          {
            Object.keys(this.props.characterData).map((characterName) => {
              if (characterName === this.props.selectedCharacterName) {
              return <li key={characterName} onClick={this.handleClick} className="character-selected">{characterName}</li>;
              } else {
              return <li key={characterName} onClick={this.handleClick}>{characterName}</li>;
              }
            })
          }
        </ul>
      </aside>
    );
  }
}
