'use strict';

export class ActorListing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const actorNameStyle = {
    };
    return (
      <div className="actor-listing">
        <h4>Actor Listing</h4>
        <ul>
          {
            this.props.actorListing.map((actor) => {
              return <li key={actor} style={actorNameStyle}>{actor}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
