import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PastLaunches from './pages/PastLaunches';
import Rocket from './pages/Rocket';
import NavBar from './components/NavBar';
import Launches from './components/LaunchInfo';

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
});

const App = () => (
    <ApolloProvider client={client}>
        <Router>
            <div className="general">

                <Switch>
                    <Route exact path="/" >
                        <NavBar></NavBar>
                        <Home></Home>
                    </Route>
                    <Route exact path="/launches" >
                        <NavBar></NavBar>
                        <PastLaunches></PastLaunches>
                    </Route>
                    <Route exact path="/launcheinfo" >
                        <NavBar></NavBar>
                        <Launches></Launches>
                    </Route>
                    <Route exact path="/rocket/:id"  >
                        <NavBar></NavBar>
                        <Rocket></Rocket>

                    </Route >
                    <Route exact path="/launcheinfo/:id"  >
                        <NavBar></NavBar>
                        <Rocket></Rocket>

                    </Route >

                </Switch>
            </div>
        </Router>

    </ApolloProvider >
);

export default App;

