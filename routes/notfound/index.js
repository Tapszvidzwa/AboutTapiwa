const style = css`/routes/home/index.css`;

// Default 404 page.
export default () => html`
  <div className=${style}>
    <header className="App-header">
      <p>404 Error: <code>${location.pathname}</code></p>
      <a href='/' className='App-link'>Go Back Home</a>
    </header>
  </div>
`;
