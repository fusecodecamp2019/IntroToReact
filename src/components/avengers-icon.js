'use strict';

export class AvengersIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imageStyle = {
      'color': 'white',
      'marginLeft': '10px'
    };
    return (
      <img src="/dist/assets/avengers.png" alt="Avengers logo" height="20" width="20" style={imageStyle}></img>
    );
  }
}
