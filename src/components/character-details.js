class CharacterDetails extends React.Component {
  render() {
    return (
      <div>
        <h2>Bruce Banner / Hulk</h2>
        <p>An Avenger and a genius scientist who, because of exposure to gamma radiation, transforms into a monster when
          enraged or agitated.[7] The character concludes a story arc that was established in Thor: Ragnarok and
          Avengers:
          Infinity War.[8]</p>
        <article>
          <section>
            <div className="actor-listing">
              <h4>Actor Listing</h4>
              <ul>
                <li>Edward Norton</li>
                <li>Mark Ruffalo</li>
              </ul>
            </div>
          </section>
          <section>
            <div className="movie-appearances">
              <h4>Movie Appearances</h4>
              <ul>
                <li>The Incredible Hulk</li>
                <li>The Avengers</li>
                <li>Avengers: Age of Ultron</li>
                <li>Thor: Ragnarok</li>
                <li>Avengers: Infinity War</li>
                <li>Avengers: Endgame</li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

const characterDetailsDomContainer = document.querySelector('.bruce-banner-details');
ReactDOM.render(React.createElement(CharacterDetails), characterDetailsDomContainer);