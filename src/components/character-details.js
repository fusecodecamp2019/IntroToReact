'use strict';
import { ActorListing } from './actor-listing.js';
import { MovieAppearances } from './movie-appearances.js';

export class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.characterName}</h2>
        <p>{this.props.characterData.description}</p>
        <article>
          <section>
            <ActorListing actors={this.props.characterData.actors}></ActorListing>
          </section>
          <section>
            <MovieAppearances movies={this.props.characterData.movies}></MovieAppearances>
          </section>
        </article>
      </div>
    );
  }
}
