import React from "react";
import { Title } from "./components/Title";
import MainSearch from "./components/MainSearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SummonerLandingPage from "./components/SummonerLandingPage";
import { SummonerProvider } from "./components/context/SummonerProvider";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
    return (
        <Router>
            <SummonerProvider>
                <NavBar />

                <Switch>
                    <Route path="/" exact component={MainSearch} />
                    <Route path="/summoner/:summonerName" component={SummonerLandingPage} />
                </Switch>
            </SummonerProvider>
        </Router>
    );
};

export default App;
