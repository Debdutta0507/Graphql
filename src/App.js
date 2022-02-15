import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PastLaunches from './pages/PastLaunches';
import Rocket from './pages/Rocket';
import NavBar from './components/NavBar';

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
});

const App = () => (
    <ApolloProvider client={client}>
        <Router>
            <div className="general">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/launches" component={PastLaunches} />
                    <Route exact path="/rocket/:id" component={Rocket} />
                </Switch>
            </div>
        </Router>

    </ApolloProvider>
);

export default App;

