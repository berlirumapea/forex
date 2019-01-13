# Forex App

Forex App is a website app that shows some currencies rates based on USD created with React with Redux as state management and Semantic UI as UI Framework.

### Project Structure
`./public/index.html` is the main page template.
`./src/index.js` is the javascript entry point.
`./src/App.js` is the container of components of the app.
`./src/components/` contains all the presentational components.
`./src/store/index.js` contains a store that holds whole state tree.
`./src/actions/currencyActions.js` is a set of action creators that send payload of informations to the store.
`./src/reducers/currencyReducers.js` describes how the application state changes
`.src/__tests__/` is set of tests of action creators and the reducers

### Avalaible Scripts
You can use **yarn** or **npm** but i will use yarn in here.
`yarn start` or `npm start`
Runs the app on the development environment

`yarn run test`
Runs the test runner with watch mode(run when changes has been made)

`yarn run build`
Builds the app for the production to the `build` folder.