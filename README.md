
# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)  

then modified according to the first few chapters of the React Cook Book

[![React Cook Book cover](https://raw.githubusercontent.com/TurtleWolf/react_scaffolding/master/ReactCookBook.png "React Cook Book By Carlos Santana Roldán August 2018")](https://subscription.packtpub.com/book/web-development/9781783980727 "By Carlos Santana Roldán August 2018c")

& this Medium article Creating a chat web app using Express.js, React.js & Socket.i0
[![Creating a chat web app using Express.js, React.js & Socket.io](Images_of_Issues/antonio-article.png "Creating a chat web app using Express.js, React.js & Socket.i")](https://medium.com/signature-networks/creating-a-chat-web-app-using-express-js-react-js-socket-io-1b01100a8ea5 "Antonio Erdeljac")

& maybe this video  
[![Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js](Images_of_Issues/mastery-video.png "Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js")](https://youtu.be/ZwFA3YMfkoc " JavaScript Mastery")

# [ChatSocketIO Draggable Dice DockerFile React AWS](http://ec2-52-87-220-90.compute-1.amazonaws.com/ "Chattain Ship & Crew")

[![Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js](Images_of_Issues/mastery-video.png "Chattain Ship & Crew")](http://ec2-52-87-220-90.compute-1.amazonaws.com " TurtleWolfe.com")

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
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

``` bash
sudo apt install nodejs
npm install -g create-react-app@3.0.1
npx create-react-app ./
npm start
```

``` bash
sudo apt purge nodejs
sudo apt remove nodejs
sudo npm uninstall -g create-react-app
docker run -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 3000:3000 --rm react_scaffolding:dev
```
