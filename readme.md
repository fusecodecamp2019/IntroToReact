

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

Optional
- Github, https://desktop.github.com/

1. Create a base index.html page.

2. Have at least one React component embedded into the page.

3. Run and view the page in the browser.

Installation notes (see the package.json file for your npm dependencies):
- (Core focus) React, the core library we are focusing on for this sesssion
- (Seconday focus) Redux, manages data and how it changes for the website
- react-dom, a supplemental library that helps React work with our HTML page.
- react-redux, a supplemental library to supply React with bindings to Redux.

- babel-cli, parts of React (JSX) won't run natively in a browser.  There are a few other Javascript feature we will use that won't run natively either.  Babel translates our Javascript files so that browsers can run our React code without issue.
- babel-preset-react-app, helps Babel with translating our React code.

- http-server, A simple http server so that we emulate simple web hosting.  There's a lot of ways you can do this, I am picking this as it is one I most frequently use for my own efforts.


A good reference point in setting up a basic page with React:
https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx

<!-- Chrome extension for Redux DevTools:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd -->
