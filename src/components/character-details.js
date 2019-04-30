'use strict';
import { characterDataListing } from '../data/marvel-character-data.js';
import { ActorListing } from './actor-listing.js';

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
    
    // This is temporary so we can componentize section of the page using a specific character
    this.characterName = 'Bruce Banner / Hulk';
    this.characterData = characterDataListing[this.characterName];
  }

  render() {
    return (
      <div>
        <h2>{this.characterName}</h2>
        <p>{this.characterData.description}</p>
        <article>
          <section>
            <ActorListing></ActorListing>
          </section>
          <section>
            <div className="movie-appearances">
              <h4>Movie Appearances</h4>
              <ul>
                <li>The Incredible Hulk</li>
                <li>The Avengers</li>
                <li>Avengers: Age of Ultron</li>
                <li>Thor: Ragnarok</li>
                <li>Avengers: Infinity War</li>
                <li>Avengers: Endgame</li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

const characterDetailsDomContainer = document.querySelector('.bruce-banner-details');
ReactDOM.render(React.createElement(CharacterDetails), characterDetailsDomContainer);