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
Currently http://localhost:8080/ is serving the index.html file in the root directory.  This html file is currently providing information on characters from the first Avengers movie.  It uses a little bit of JQuery to hide and show sections of html based on user's clicking in the left-hand pane.

Talking points:
- There is a decent amount of repetitive html for each of the characters from the movie.
- There is a sprinkling of raw Javascript that leverages JQuery to hide and show parts of the page based on user clicks.
- This page is decent for a simple example.  But if more complexity were to be added to this page it can be hard to manage using the current pattern.  If I were to have to expand this page I would start by moving the repetitive html into a generator in Javascript --> and that is exactly what the React library is built for.

## 3. Add React to the page
This repository uses npm to download and make whatever Javascript libraries you want available.  You ran `npm install` earlier which actually downloaded the react library we need into the "node_modules" directory.  

Add the below two script tags to the index.html page.  These need to be added in between the `<head>...</head>` tags.
```
  <script defer src="node_modules/react/umd/react.development.js"></script>
  <script defer src="node_modules/react-dom/umd/react-dom.development.js"></script>
```


A good reference point in setting up a basic page with React:
https://reactjs.org/docs/add-react-to-a-website.html

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
1. Add a `<script></script>` tag to import your header component into the index.html page.  Place this script tag as the last line inside the `<header></header>` tag.
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
4. Verify that you see Bruce's information properly on the screen.