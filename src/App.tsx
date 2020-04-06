import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SummonerProvider } from "./components/context/SummonerProvider";
import NavBar from "./components/navigation/NavBar";
import LandingPage from "./components/index/LandingPage";
import { SearchValueProvider } from "./components/context/SearchValueProvider";
import { RegionProvider } from "./components/context/RegionProvider";
import SummonerStatsPage from "./components/match-history/SummonerStatsPage";

const App: React.FC = () => {
    return (
        <Router>
                <SearchValueProvider>
                    <RegionProvider>
                        <SummonerProvider>
                            <NavBar />

                            <Switch>
                                <Route path="/" exact component={LandingPage} />
                                <Route path="/summoner/:region/:summonerName" component={SummonerStatsPage} />
                            </Switch>
                        </SummonerProvider>
                    </RegionProvider>
                </SearchValueProvider>
        </Router>
    );
};

export default App;
