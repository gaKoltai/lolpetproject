## Summoner Searcher

### Goals of the site:

- Provide (yet another) platform where users look up match history and account data of [League of Legends](https://euw.leagueoflegends.com/en-gb/) players from the [RIOT Games API](https://developer.riotgames.com/).
- Future plans include displaying more data and statistics about playable characters, game types and ranked game statistics.

### Motivations for building this project:

- Familiarize myself with various frontend technologies and libraries (React, CSS, Bulma, styled-components).


### In order to run the website:

-  Please download the backend API from (and follow readme.md) to be able to interact with the RIOT GAMES API due to CORS policy restrictions : https://github.com/gaKoltai/lolpetprojectCSAPI
- Install dependencies : run `npm install` from project root.
- Run the development server with: `npm start`
- Check if port for backend API hosting matches with what is specified in static/util/util.js.


### Important :

I am currently reworking the site to use fully custom CSS with styled-components which is not integrated in the master branch as of yet. If you are interested please take a look at the 'trying-styled-components' branch.


This project was bootstrapped with Create React App.

### Technologies used:

- [React](https://reactjs.org/)
- [Bulma](https://bulma.io/) CSS library.
- [Styled components](https://styled-components.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
