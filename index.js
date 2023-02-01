import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.30/index.js';
import htm from 'https://unpkg.com/htm@2.1.1/dist/htm.mjs';
import csz from 'https://unpkg.com/csz@0.1.2/index.js';

// Global variables.
window.React = React;
window.css = csz;
window.html = htm.bind(React.createElement);

const body = document.getElementById("body");

// All active web app routes.
const Route = {
  '/': React.lazy(() => import('./routes/home/index.js')),
  '*': React.lazy(() => import('./routes/notfound/index.js')),
};

// Returns the component of the route requested in the URL.
ReactDOM.render(
  html`
    <${React.Suspense} fallback=${html`<div></div>`}>
      <${Route[location.pathname] || Route['*']} />
    <//>
  `,
  body
);
