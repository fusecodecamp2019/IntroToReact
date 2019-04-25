

#### High level TODO's
1. Create data model spec
2. Create data model for Star Wars
3. Create data model for Avengers
4. Course curriculum for the day
5. Build Raw HTML app to demonstrate functionality when unmanaged.

## Course layout

### 1. Setup

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

A good reference point in setting up a basic page with React:
https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx

