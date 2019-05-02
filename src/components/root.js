import { characterDataListing } from '../data/marvel-character-data.js';
import { Header } from './header.js';
import { Footer } from './footer.js';
import { CharacterListing } from './character-listing.js';
import { CharacterDetails } from './character-details.js';

export class Root extends React.Component {
  render() {
    return (
      <div id="root">
        <header>
          <Header></Header>
        </header>
        <aside className="character-listing">
          <CharacterListing></CharacterListing>
        </aside>
        <main className="character-details no-selection-details">
          <div>(No selection has been made)</div>
        </main>
        <main className="character-details-hidden bruce-banner-details">
          <CharacterDetails
            characterName="Bruce Banner / Hulk"
            characterData={characterDataListing['Bruce Banner / Hulk']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden hawkeye-details">
          <CharacterDetails
            characterName="Clint Barton / Hawkeye"
            characterData={characterDataListing['Clint Barton / Hawkeye']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden erik-selvig-details">
          <CharacterDetails
            characterName="Erik Selvig"
            characterData={characterDataListing['Erik Selvig']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden loki-details">
          <CharacterDetails
            characterName="Loki"
            characterData={characterDataListing['Loki']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden maria-hill-details">
          <CharacterDetails
            characterName="Maria Hill"
            characterData={characterDataListing['Maria Hill']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden black-widow-details">
          <CharacterDetails
            characterName="Natasha Romanoff / Black Widow"
            characterData={characterDataListing['Natasha Romanoff / Black Widow']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden nick-fury-details">
          <CharacterDetails
            characterName="Nick Fury"
            characterData={characterDataListing['Nick Fury']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden phil-coulson-details">
          <CharacterDetails
            characterName="Phil Coulson"
            characterData={characterDataListing['Phil Coulson']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden captain-america-details">
          <CharacterDetails
            characterName="Steve Rogers / Captain America"
            characterData={characterDataListing['Steve Rogers / Captain America']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden thor-details">
          <CharacterDetails
            characterName="Thor"
            characterData={characterDataListing['Thor']}>
          </CharacterDetails>
        </main>
        <main className="character-details-hidden iron-man-details">
          <CharacterDetails
            characterName="Tony Stark / Iron Man"
            characterData={characterDataListing['Tony Stark / Iron Man']}>
          </CharacterDetails>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
  }
}

const reactRootDomContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Root), reactRootDomContainer);