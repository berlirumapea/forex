# Forex App

Forex App is a website app that shows some currencies rates based on USD created with React with Redux as state management and Semantic UI as UI Framework

### Project Structure
`./public/index.html` the main page template.<br />
`./src/index.js` is the javascript entry point.<br />
`./src/App.js` is the container of components of the app.<br />
`./src/components/` contains all the presentational components.<br />
`./src/store/index.js` contains a store that holds whole state tree.<br />
`./src/actions/currencyActions.js` is a set of action creators that send payload of informations to the store.<br />
`./src/reducers/currencyReducers.js` describe how the application state changes<br />
`.src/__tests__` set of tests of action creators and the reducers<br />

### Avalaible Scripts
You can use **yarn** or **npm** but i will use yarn in here.
- `yarn start` or `npm start`
Runs the app on the development environment <br />

- `yarn run test`
Runs the test runner with watch mode(run when changes has been made) <br />

- `yarn run build`
Builds the app for the production to the `build` folder. <br />


