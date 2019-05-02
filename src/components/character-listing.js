export class CharacterListing extends React.Component {
  render() {
    return (
      <aside className="character-listing">
        <ul>
          <li className="bruce-banner-selector">Bruce Banner / Hulk</li>
          <li className="hawkeye-selector">Clint Barton / Hawkeye</li>
          <li className="erik-selvig-selector">Erik Selvig</li>
          <li className="loki-selector">Loki</li>
          <li className="maria-hill-selector">Maria Hill</li>
          <li className="black-widow-selector">Natasha Romanoff / Black Widow</li>
          <li className="nick-fury-selector">Nick Fury</li>
          <li className="phil-coulson-selector">Phil Coulson</li>
          <li className="captain-america-selector">Steve Rogers / Captain America</li>
          <li className="thor-selector">Thor</li>
          <li className="iron-man-selector">Tony Stark / Iron Man</li>
        </ul>
      </aside>
    );
  }
}
