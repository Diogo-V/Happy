import React from 'react';

// We need to prefix every path with a '.' because, otherwise, it would try to find it in the node modules
import './styles/global.css';

// We need to import our routes to the main file so that we can navigate to each component
import Routes from "./routes";

function App() {
  return (
    <Routes />
  );
}

export default App;
