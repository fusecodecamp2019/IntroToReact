'use strict';
import { SimpleListing } from './simple-listing.js';

export class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.characterName) {
      return (
        <div>
          <h2>{this.props.characterName}</h2>
          <p>{this.props.characterData.description}</p>
          <article>
            <section>
              <SimpleListing
                title="Actor Listing"
                listing={this.props.characterData.actors}>
              </SimpleListing>
            </section>
            <section>
              <SimpleListing
                title="Movie Appearances"
                listing={this.props.characterData.movies}>
              </SimpleListing>
            </section>
          </article>
        </div>
      );
    }
    return <div>(No selection has been made)</div>;
  }
}
