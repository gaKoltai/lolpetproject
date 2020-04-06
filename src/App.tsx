import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SummonerLandingPage from "./components/SummonerLandingPage";
import { SummonerProvider } from "./components/context/SummonerProvider";
import NavBar from "./components/navigation/NavBar";
import LandingPage from "./components/LandingPage";
import { SearchValueProvider } from "./components/context/SearchValueProvider";
import { RegionProvider } from "./components/context/RegionProvider";
import MainPageHero from "./components/MainPageHero";

const App: React.FC = () => {
    return (
        <Router>
            <SearchValueProvider>
                <RegionProvider>
                    <SummonerProvider>
                        <NavBar />

                        <Switch>
                            <Route path="/" exact component={LandingPage} />
                            <Route path="/summoner/:region/:summonerName" component={SummonerLandingPage} />
                        </Switch>
                    </SummonerProvider>
                </RegionProvider>
            </SearchValueProvider>
        </Router>
    );
};

export default App;
