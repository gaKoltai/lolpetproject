import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import LandingPage from "./components/index/LandingPage";
import { SearchValueProvider } from "./components/context/SearchValueProvider";
import { RegionProvider } from "./components/context/RegionProvider";
import SummonerStatsPage from "./components/summoner-stats/SummonerStatsPage";
import SummonerDataProvider from "./components/context/SummonerDataProvider";

const App: React.FC = () => {
    return (
        <Router>
            <SummonerDataProvider>
                <SearchValueProvider>
                    <RegionProvider>
                        <NavBar />
                        <Switch>
                            <Route path="/" exact component={LandingPage} />
                            <Route path="/summoner/:region/:summonerName" component={SummonerStatsPage} />
                        </Switch>
                    </RegionProvider>
                </SearchValueProvider>
            </SummonerDataProvider>
        </Router>
    );
};

export default App;
