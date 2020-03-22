import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // format page
import App from "./App"; // App Component
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify"; // imports Amplify to know how to use configuration
import config from "./config";
import * as serviceWorker from "./serviceWorker";

// Setting up various AWS resources that we want to interact with
Amplify.configure({
  Auth: {
    mandatorySignIn: true, // User must be signed in in order to interact with our app
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  }
});

ReactDOM.render(
  <Router>
    <App />
    {/* App component which encapsulates the entire app */}
    {/* The Router renders the App component and serves out pages */}
    {/*  */}
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
