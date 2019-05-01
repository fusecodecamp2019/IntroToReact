export class MovieAppearances extends React.Component {
  render() {
    return (
      <div className="movie-appearances">
        <h4>Movie Appearances</h4>
        <ul>
          {
            this.props.movies.map((movie) => {
              return <li key={movie}>{movie}</li>
            })
          }
        </ul>
      </div>
    );
  }
}