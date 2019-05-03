import { characterDataListing } from '../data/marvel-character-data.js';
import { SimpleListing } from './simple-listing.js';

export class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);

    // This is temporary so we can componentize this section of the page using a specific character
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
            <SimpleListing
              title="Actor Listing"
              listing={this.characterData.actors}>
            </SimpleListing>
          </section>
          <section>
            <SimpleListing
              title="Movie Appearances"
              listing={this.characterData.movies}>
            </SimpleListing>
          </section>
        </article>
      </div>
    );
  }
}
