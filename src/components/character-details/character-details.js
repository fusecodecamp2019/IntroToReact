'use strict';
import { MovieAppearances } from './movie-appearances.js';
import { ActorListing } from './actor-listing.js';

export class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sectionStyling = {
    };
    if (this.props.selectedCharacter) {
      return (
        <main className="character-details">
          <h2>{this.props.selectedCharacter.name}</h2>
          <p>{this.props.selectedCharacter.description}</p>
          <article>
            <section style={sectionStyling}>
              <ActorListing actorListing={this.props.selectedCharacter.actors}></ActorListing>
            </section>
            <section style={sectionStyling}>
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
