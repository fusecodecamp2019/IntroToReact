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

## 4. Add your first component to the page
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
3. Move the contents of the `<header></header>` tag into the return value of of the Header.render function you created in the last step.
4. Add the below 2 statements at the end of the "header.js" file.
```
const domContainer = document.querySelector('header');
ReactDOM.render(React.createElement(Header), domContainer);
```
5. Add a `<script></script>` tag to import your header component into the index.html page.  Place this script tag as the last line inside the `<header></header>` tag.
```
<script defer src="dist/components/header.js"></script>
```

#### (Review what we have just done to make sure that everyone understands what is going on)

## 5. Move the footer into a component (rinse and repeat)
Repeat the process from section 4 with the footer for the page just to ensure you grasp the process of creating a React component.

## 6. Move the character details into components
For this next effort we are going to move all of the `<main></main>` tags that have the "character-details-hidden" class into components.  Here, while the structure of these tags are identical the data content varies.  

The person who wrote this webpage used data from '/dist/data/marvel-character-data.js' to manually build the data on the current page.  For this section we are going to try and build a component that accepts the name of the character as well as its related data.

Goals for this step:
1. Similar to the header and footer create a new component to provide character details.  In the render method start by literally copy and pasting the first of the `<main></main>` tags you are componentizing.  Use the same process you did with the header and footer for this effort.
2. Make the character data from '/dist/data/marvel-character-data.js' available as a global variable by adding a `<script></script>` tag to the top of the page for this file.  Make sure this addition is above your components.



As a reference on how parameters are passed to components see:
https://reactjs.org/docs/components-and-props.html