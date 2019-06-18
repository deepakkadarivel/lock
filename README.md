#Lock SPA with React

## Features

-   [ Add | Delete ] doors
-   [Add | Delete ] people with access to Doors
-   Authorize valid users to access the door. (Shown as granted or denied notification)
-   Internationalization (Current version [Dutch | English])
-   Responsive
-   SPA feature to reload only modified content
-   Persisting Page content on hard browser refresh for better user experience (Using IndexDB)

## prerequisite

The React app communicates with IndexDb api to insert and fetch data

##### Redux dev tools

-   The app will not run if the Redux Devtools plugin is not installed in chrome. So It's commented now, If you would like to access Redux pannel feature, uncomment Redux tools logic in `store/index.js`

Chrome (Any mordern browser)
Node v 8.5 or above
React and Redux devtools plugin

Clone the proxy server repo and run the project.

##### Run Command

    `npm install` to install all dependancies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run cy:open`

Launchers cypress and runs integration (end to end) tests.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Info

-   The App UX is made intutive enough for a new user to work around by himself instead of having a walkthrough or tutorial.
-   Since there are no Backend API's involved in this project, Browser IndexDb is used to persist data.
-   Not all components have tests. Due to time shortage, a single statefull component Home is added with actions, component, container abd reducer tests. Ideally it would be the same approach for all components.
