'use strict';
import { MovieAppearances } from './movie-appearances.js';
import { ActorListing } from './actor-listing.js';

export class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  // <img src="/dist/assets/avengers-logo.jpg" alt="Avengers logo" height="30" width="30"></img>

  render() {
    if (this.props.selectedCharacter) {
      return (
        <main className="character-details" style={this.props.generalLeftPadding}>
          <h2>{this.props.selectedCharacter.name}</h2>
          <p>{this.props.selectedCharacter.description}</p>
          <article>
            <section>
              <ActorListing actorListing={this.props.selectedCharacter.actors}></ActorListing>
            </section>
            <section>
             <MovieAppearances movieListing={this.props.selectedCharacter.movies}></MovieAppearances>
            </section>
          </article>
        </main>
      );
    }
    return (
      <main className="character-details">
        <div>(No selection has been made)</div>
      </main>
    );
  }
}
