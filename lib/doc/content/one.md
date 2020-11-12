# Title

- test
- test

~~~shell
npm init
npm install
~~~

~~~json
{
  "name": "react-training-material",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "private": true,
  "engines": {
    "npm": ">=6",
    "node": ">=12.16.2"
  },
  "scripts": {
    "start": "webpack-dev-server --open --mode development",
    "build": "webpack --mode production",
    "lint": "eslint --ext .js,.jsx ./src",
    "server:doc": "node lib/cli/doc",
    "server:backend": "node lib/cli/backend",
    "project": "node lib/cli/project"
  },
  "authors": [
    "dev.esde.be@gmail.com",
    "sendi.dwi@talentdig.id"
  ],
  "license": "MIT",
  "dependencies": {
    "@hookform/resolvers": "^1.0.1",
    "axios": "^0.21.0",
    "clsx": "^1.1.1",
    "joi": "^17.3.0",
    "js-cookie": "^2.2.1",
    "jwt-decode": "^3.1.1",
    "localforage": "^1.9.0",
    "qs": "^6.9.4",
    "react": "^16.14.0",
    "react-app-polyfill": "^2.0.0",
    "react-dom": "^16.14.0",
    "react-helmet": "^6.1.0",
    "react-hook-form": "^6.11.0",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "redux": "^4.0.5",
    "redux-persist": "^6.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.12.0",
    "@babel/preset-env": "^7.12.0",
    "@babel/preset-react": "^7.12.5",
    "@babel/register": "^7.12.1",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.1.0",
    "cfonts": "^2.8.6",
    "chalk": "^4.1.0",
    "chokidar": "^3.4.3",
    "circular-dependency-plugin": "^5.2.2",
    "clear": "^0.1.0",
    "commander": "^6.2.0",
    "copy-webpack-plugin": "^6.3.0",
    "cors": "^2.8.5",
    "css-loader": "^5.0.1",
    "dotenv": "^8.2.0",
    "eslint": "^7.13.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^6.15.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.21.4",
    "eslint-plugin-react-hooks": "^4.0.0",
    "eslint-plugin-unicorn": "^23.0.0",
    "express": "^4.17.1",
    "express-fileupload": "^1.2.0",
    "html-loader": "^1.3.2",
    "html-webpack-plugin": "^4.5.0",
    "inquirer": "^7.3.3",
    "ip": "^1.1.5",
    "json-loader": "^0.5.7",
    "json-server": "^0.16.2",
    "json-server-auth": "^2.0.2",
    "minimist": "^1.2.5",
    "ora": "^5.1.0",
    "portfinder": "^1.0.28",
    "prettier": "^2.1.2",
    "react-markdown": "^5.0.2",
    "react-syntax-highlighter": "^15.3.0",
    "regenerator-runtime": "^0.13.7",
    "remark-gfm": "^1.0.0",
    "rimraf": "^3.0.2",
    "serve-favicon": "^2.5.0",
    "source-map-loader": "^1.1.2",
    "style-loader": "^2.0.0",
    "swagger-ui": "^3.36.2",
    "uuid": "^8.3.1",
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-middleware": "^4.0.1",
    "webpack-dev-server": "^3.11.0",
    "webpack-hot-middleware": "^2.25.0",
    "yaml": "^1.10.0",
    "yaml-loader": "^0.6.0"
  }
}
~~~

~~~jsx
import ReactDom from 'react-dom'
import React from 'react'

function App() {
  return (
    <div>
      App
    </div>
  )
}

ReactDom.render(
  <App />,
  document.getElementById('root'),
)
~~~

This ~is not~ strikethrough, but ~~this is~~!

~~~html
<!DOCTYPE>
<html>
  <head></head>
  <body>
    <div id="root"></div>
  </body>
</html>
~~~
