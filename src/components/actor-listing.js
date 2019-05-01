export class ActorListing extends React.Component {
  render() {
    return (
      <div className="actor-listing">
        <h4>Actor Listing</h4>
        <ul>
          {
            this.props.actors.map((actor) => {
              return <li key={actor}>{actor}</li>
            })
          }
        </ul>
      </div>
    );
  }
}