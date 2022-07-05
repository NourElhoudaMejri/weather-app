# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To install the dependencies, use the command

`npm install`

and to launch the project on localhost:3000,  you can run:

### `npm start`

Run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
## ESLint

ESLint has been set on the project. helps you find and fix problems with your JavaScript code.
He should underline errors if needed on your different folders and files.
If you want to have a global vision you can run `npm lint` to test all your files on /src package.
If you need to auto fix all the /src package, run `npm lint --fix`

## Chakra-UI

We use the framework Chakra-UI on this project.

https://next.chakra-ui.com/docs/getting-started

Most of components are from this package, and you have to know that we don't use classic CSS files. We use JSS by properties, according to Chakra's Principle (https://next.chakra-ui.com/docs/principles)

**When you will use a new Chakra UI component which is not already present in the app, if this component is using `colorScheme` or color defined by the theme, you will certainly have to update its style according with the design. Check `customTheme.js` to see examples of components overridden**

## Icons

The default icons library on the project is FontAwesome. You can use FontAwesome icons with the react-icons package

https://react-icons.netlify.com/#/icons/fa

The Icon component is in `components/Icon` with the storybook documentation associated.

## React Query

We use react query on this project

https://react-query.tanstack.com/

React Query is a package which will help separating our states (API call and pure view call). It will also help to manage our Loading state, Fetching state, error on API call, and other things like data  and refreshing...

If it's your first time with React Query, we invite you to take a look at the documentation and the principle, and also to the important defaults here -> https://react-query.tanstack.com/docs/guides/important-defaults

Also, we invite you if you're new to take a look at the React Documentation and the Hooks. https://en.reactjs.org/docs/hooks-intro.html

To create a new Query for a new API call, create or edit files in `src/services` and please respect the hook syntax, the react query syntax for get and mutate call and the axios syntax if needed.

If you want to follow your call, use React Query Devtools which is already install on the project in development mode. https://github.com/tannerlinsley/react-query-devtools
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
