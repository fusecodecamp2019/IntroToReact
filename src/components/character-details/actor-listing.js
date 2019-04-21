'use strict';

export class ActorListing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="actor-listing">
        <h4>Actor Listing</h4>
        <ul>
          {
            this.props.actorListing.map((actor) => {
              return <li key={actor}>{actor}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
