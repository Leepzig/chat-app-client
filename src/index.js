import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-zo488mts.us.auth0.com"
    clientId="8IUFKulsodUeLq8SneFa881pVbznZDzX"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
