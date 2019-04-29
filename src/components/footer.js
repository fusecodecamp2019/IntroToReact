class Footer extends React.Component {
  render() {
    return (
      <div>Fuse Code Camp 2019 - Introduction to the React Javascript library</div>
    );
  }
}

const footerDomContainer = document.querySelector('footer');
ReactDOM.render(React.createElement(Footer), footerDomContainer);