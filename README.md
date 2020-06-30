# ReactJS GenomiX

[![npm version](https://badge.fury.io/js/react-genomix.svg)](https://badge.fury.io/js/react-genomix)

[![Build Status](https://travis-ci.org/chopdgd/react-genomix.svg?branch=develop)](https://travis-ci.org/chopdgd/react-genomix)

[![codecov](https://codecov.io/gh/chopdgd/react-genomix/branch/develop/graph/badge.svg)](https://codecov.io/gh/chopdgd/react-genomix)

Core library for Nexus projects using ReactJS

## Getting Started

Clone repo

```
git clone https://github.com/chopdgd/react-genomix.git
```

Install dependencies

`npm install` or `yarn install`

Setup pre-commit hook for prettier

`make setup-githooks`

Start development server

`npm start` or `yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Start storybook server

`npm storybook` or `yarn storybook`

Runs the demo app in a storybook.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### Library files

All library files are located inside `src/lib`

### Demo app

Is located inside `src/demo` directory, here you can test your library while developing

### Testing

`npm run test` or `yarn run test`

### Build library

`npm run build` or `yarn run build`

Produces production version of library under the `build` folder.

## Using in a project

`npm install react-genomix` or `yarn add react-genomix`

Add css to your project.

In index.js:

`import 'react-genomix/dist/react-genomix.min.css'`

In css/scss file:

`@import "~react-genomix/dist/react-genomix.min.css";`
