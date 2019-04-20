'use strict';

export class MovieAppearances extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movieNameStyle = {
    };
    return (
      <div className="movie-appearances">
        <h4>Movie Appearances</h4>
        <ul>
          {
            this.props.movieListing.map((movie) => {
              return <li key={movie} style={movieNameStyle}>{movie}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
