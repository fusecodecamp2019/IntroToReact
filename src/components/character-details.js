class CharacterDetails extends React.Component {
  render() {
    return (
      <div>Fuse Code Camp 2019 - Introduction to the React Javascript library</div>
    );
  }
}

const characterDetailsDomContainer = document.querySelector('.bruce-banner-details');
ReactDOM.render(React.createElement(CharacterDetails), characterDetailsDomContainer);