import React, { useState } from "react";
import RankedStats from "./components/RankedStats";
import MatchHistory from "./components/MatchHistory";
import Title from "./components/Title";
import MainSearch from "./components/MainSearch";

function App() {
  const [summonerName, setSummonerName] = useState();

  const getSummonerName = name => {
    setSummonerName(name);
  };

  if (summonerName != null) {
    return (
      <div>
        <Title />
        <MainSearch searchData={getSummonerName} />
        <MatchHistory summonerName={summonerName} />
      </div>
    );
  } else {
    return (
      <div>
        <Title />
        <MainSearch searchData={getSummonerName} />
      </div>
    );
  }
}

export default App;
