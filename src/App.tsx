import React, { useState } from "react";
import { MatchHistory } from "./components/MatchHistory";
import { Title } from "./components/Title";
import AdditionalData from "./components/AdditionalData";
import { Summoner } from "./util/jsonDataInterfaces";
import { summonerEndpoint, apiGet } from "./util/utilities";
import MainSearch from "./components/MainSearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SummonerLandingPage from "./components/SummonerLandingPage";
import { SummonerProvider } from "./components/context/SummonerProvider";

const App: React.FC = () => {
    return (
        <Router>
            <SummonerProvider>
                <div>
                    <Title />
                </div>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={MainSearch} />
                        <Route path="/summoner/:summonerName" component={SummonerLandingPage} />
                    </Switch>
                </div>
            </SummonerProvider>
        </Router>
    );
};

export default App;
