import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';  // Package needed to manage our routes with react

import Landing from './pages/Landing';
import OrphanagesMap from "./pages/OrphanagesMap";

// Routes declaration
// Routes takes the path that wants us to show and the component that we want to show to the user
// Main route needs to have 'exact'. Otherwise we would be seeing 2 pages at the same time
// Switch blocks 2 routes from being called simultaneously
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
