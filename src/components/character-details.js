'use strict';
import { characterDataListing } from '../data/marvel-character-data.js';
import { ActorListing } from './actor-listing.js';
import { MovieAppearances } from './movie-appearances.js';

export class CharacterDetails extends React.Component {
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
            <ActorListing actors={this.characterData.actors}></ActorListing>
          </section>
          <section>
            <MovieAppearances movies={this.characterData.movies}></MovieAppearances>
          </section>
        </article>
      </div>
    );
  }
}
