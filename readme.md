# Course layout

## 1. Setup
Installation requirements
- VSCode, https://code.visualstudio.com/download
- NodeJS, https://nodejs.org/en/download/
- Git(hub), https://desktop.github.com/

1. Clone this github repo from https://github.com/cah-johnryan/IntroToReact
  a. Open Terminal or Command prompt
  b. Change directory to where you want your work stored
  c. Run `git clone https://github.com/cah-johnryan/IntroToReact`

2. Run `npm install`

3. Run `npm start`

4. Open your browser of choice to http://localhost:8080/

Installation notes (see the package.json file for your npm dependencies):
- (Core focus) React, the core library we are focusing on for this sesssion.
- react-dom, a supplemental library that helps React work with our HTML page.

- babel-cli, parts of React (JSX) won't run natively in a browser.  There are a few other Javascript feature we will use that won't run natively either.  Babel translates our Javascript files so that browsers can run our React code without issue.
- babel-preset-react-app, helps Babel with translating our React code.

- http-server, A simple http server to provide local web hosting.  (There's a lot of tools you can do this with, I am picking this as it is one I most frequently use for my own efforts)

-  concurrently, Let's us run babel as well as http-server at the same time through a single command (npm start)

## 2. Orientation
Currently http://localhost:8080/ is serving the index.HTML file in the root directory.  This HTML file is currently providing information on characters from the first Avengers movie.  It uses a little bit of JQuery to hide and show sections of HTML based on user's clicking in the left-hand pane.

Talking points:
- There is a decent amount of repetitive HTML for each of the characters from the movie.
- There is a sprinkling of raw Javascript that leverages JQuery to hide and show parts of the page based on user clicks.
- This page is decent for a simple example.  But if more complexity were to be added to this page it can be hard to manage using the current pattern.  If I were to have to expand this page I would start by moving the repetitive HTML into a generator in Javascript --> and that is exactly what the React library is built for.

## 3. Add React to the page
This repository uses npm to download and make whatever Javascript libraries you want available.  You ran `npm install` earlier which actually downloaded the react library we need into the "node_modules" directory.  

Add the below two script tags to the index.HTML page.  These need to be added in between the `<head>...</head>` tags.
```
  <script defer src="node_modules/react/umd/react.development.js"></script>
  <script defer src="node_modules/react-dom/umd/react-dom.development.js"></script>
```


A good reference point in setting up a basic page with React:
https://reactjs.org/docs/add-react-to-a-website.HTML

Not much of a bang here but needed for the next step...

## 4. Add your first component to the page (header)
Right-click on the page and inspect the `<header></header>` tag.  You should see highlighting for the grid being used to layout the page.  In this section we are going to move the header into a component.  The goal here is just to get you familiar with how to create and add a component to a page.

1. Create a file called "header.js" in the "\src\components\" directory.
2. In the new file, declare a class and called "Header" that extends the "React.Component" class that is provided by the React library.  This class needs to have a "render" function like below.
```
class Header extends React.Component {
  render() {
    return (

    );
  }
}
```
3. Move the contents of the `<header></header>` tag into the return value of of the Header.render function you created in the last step.  Note that JSX syntax does not agree with the use of the "class" attribute.  You will need to rename that attribute to "className".
4. Add the below 2 statements at the end of the "header.js" file.
```
const domContainer = document.querySelector('header');
ReactDOM.render(React.createElement(Header), domContainer);
```
1. Add a `<script></script>` tag to import your header component into the index.HTML page.  Place this script tag as the last line inside the `<header></header>` tag.
```
<script defer type="module" src="dist/components/header.js"></script>
```

#### (Review what we have just done to make sure that everyone understands what is going on)

## 5. Footer component migration (rinse and repeat)
Repeat the process from section 4 with the footer for the page just to ensure you grasp the process of creating a React component.

## 6. Character details component migration (for Bruce Banner).
For this next effort we are going to move the *first* of the `<main></main>` tags that have the "character-details-hidden" class into a new component (Bruce Banner).  When we have fully migrated this to a component we will expand this to do the same for its siblings.  Use the same process you did with the header and footer for this effort.  Don't forget the "className" attribute renaming with this step.  Verify that the component renders properly on the page.  
  
## 7. Character details with data binding (for Bruce Banner).
In building the original static webpage I sourced the data from the file '/dist/data/marvel-movie-data.js'.  Import this data into the new character details component and display Bruce Banners information from that data instead as raw values.

1. Import the data file by adding the below line to the top of your character details component.
```
import { characterDataListing } from '../data/marvel-character-data.js';
```
2. Once done, add a constructor to your CharacterDetails class like below.
```
  constructor(props) {
    super(props);

    // This is temporary so we can componentize this section of the page using a specific character
    this.characterName = 'Bruce Banner / Hulk';
    this.characterData = characterDataListing[this.characterName];
  }
```
3. You can then have information from the character bound to fields in the JSX.
```
        <h2>{this.characterName}</h2>
        <p>{this.characterData.description}</p>
```
4. Verify that you still see Bruce's information properly on the screen.

*We're going to stop here and NOT introduce data binding to the actor listing or movie appearance areas of this component as this now provides the opportunity for more component extraction.*

## 8 Nesting components (actor listing)
Let's take the actor listing within the character details component and extract it into its own component.  This will almost be the same as our earlier work with the header and footer.  Then we will have the character details component use the new actor listing component.

1. Create the component file.
2. Create the class for the component along with it's render function.
3. Move the source HTML from the character details component into the render function.
(1-3 is a process you should now be familiar with.  Now for the new stuff.)

4. At the top of the character details component file import the actor listing component.
```
import { ActorListing } from './actor-listing.js';
```
5. In the render function for the character details component replace the actor listing raw HTML with the actor listing component tag `<ActorListing></ActorListing>`.
6. Verify that you still see Bruce's information properly on the screen.

## 9. Nesting components with data binding
Lets get rid of that raw text in the HTML for the actor listing component and pass the actual data.

All React components have an object called **props** automatically setup to provide any properties that the parent might provide.  This section will leverage that to pass the data from the character details component to the actor listing component.

Also take a glance at the '/dist/data/marvel-movie-data.js' file and notice that each character has an "actors" property handily available with our needed data.

1. In the character details component, go back to that `<ActorListing></ActorListing>` tag.  Update that tag to have an "actors" property that will take the "actors" property from our character data.
```
<ActorListing actors={this.characterData.actors}></ActorListing>
```
2. Now go into our actor listing component.  In the we're going take this "actors" property (this.props.actors) and make it build our JSX.
```
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
```
3. Verify that you still see Bruce's information properly on the screen.

Some documentation from React about this section that might be worth reviewing:
https://reactjs.org/docs/components-and-props.HTML

## 10. Nesting components with data binding (movie appearances - rinse and repeat)

TODO: I need to have this along with section 8-9 re-use the same component.

Now as a means of making sure you grasp what we have done.  The character details component also has a section on movie appearances that needs to be extracted out into a nested component and passed the appropriate data bindings.  In this section try to complete that work.  Look back at the notes from sections 8 and 9 for anything that you might not remember.

Once done take a moment and look over what you've done so far.  This is a pretty good milestone for our work today.  

## 11. One last component - Character listing migration
You may not realize this but we have one last component left and then the whole webpage will be in React.  So look back at the index.HTML file.  We are going to move the `<aside></aside>` tag into a new character listing component.  

1. Migrate the HTML for this into a new component.

Note: this component is being injected into an HTML page, not another component.  You will need to perform the below two steps to accomplish this.
2. Add the below 2 statements at the end of the component file.
```
const characterListingDomContainer = document.querySelector('.character-listing');
ReactDOM.render(React.createElement(CharacterListing), characterListingDomContainer);
```
3. Add a `<script></script>` tag to import your header component into the index.HTML page.  Place this script tag as the last line inside the `<header></header>` tag.
```
<script defer type="module" src="dist/components/character-listing.js"></script>
```
4. Verify that you still see the character listing on the screen.

## 12. Go React or go home
It's that time.  We're going to move the whole page into React in this section.  Now this will have the most steps compared to earlier work so please take your time and if you get stuck reach out to a coach.

1. Create a new component called "root".
2. Open the webpage (index.HTML)
3. Inside the `<head></head>` tag, remove the `<script></script>` tags for all of the React components present and only have the root component injected here.
In other words:
```
<head>
  ...

  <!-- DELETE THESE LINES -->
  <script defer type="module" src="dist/components/header.js"></script>
  <script defer type="module" src="dist/components/footer.js"></script>
  <script defer type="module" src="dist/components/character-details.js"></script>
  <script defer type="module" src="dist/components/character-listing.js"></script>

  <!-- ADD THE ROOT COMPONENT BELOW -->
  <script defer type="module" src="dist/components/root.js"></script>
</head>
```
4. Cut and paste the `<div id="root"></div>` tag from the webpage along with its contents into the new root component's render method.
5. Update the body of your webpage to have only the below content
```
<body>
  <div id="react-root"></div>
</body>
```
6. Add the below 2 statements at the end of the root component file.
```
const reactRootDomContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Root), reactRootDomContainer);
```

At this point when trying to view this webpage you will see errors as the root component doesn't like some particulars with the HTML you placed in its render method.  To address this perform the following.

7. In the root component, do a replace all for the text "class=" to become "className=".
8. When trying to view the page now you should see the layout with NO CONTENT...  this is fine.

## 13. Migrating the header component to be nested in the root component
1. Add the header component as an import at the top of the root component
```
import { Header } from './header.js';
```
1. Insert the React `<Header></Header>` component tag inside the HTML `<header></header>` tag.
```
<header>
  <Header></Header>
</header>
```
2. Go to the bottom of the header component file and remove the bottom 2 lines as this component is no longer being injected into the webpage but is instead to be used as a nested component (in the root component).
```
const headerDomContainer = document.querySelector('header');
ReactDOM.render(React.createElement(Header), headerDomContainer);
```
4. Look at the webpage in the browser.  The header component should be right back where it was earlier.  Now we need to repeat this for the other components we have created.

## 14. Migrating all components to be nested in the root component (rinse and repeat)
Take the process in section 13 and repeat it for the footer, character listing, and character details components.

Once this is done the page should appear as it did before but is now moved entirely into React.  Now it is time to have React make this content dynamic.
