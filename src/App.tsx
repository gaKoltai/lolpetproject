import React, { useState } from "react";
import MatchHistory from "./components/MatchHistory";
import Title from "./components/Title";
import MainSearch from "./components/MainSearch";

function App() {
  const [summonerName, setSummonerName] = useState();

  const getSummonerName = name => {
    setSummonerName(name);
  };

  if (summonerName != null) {
    console.log(summonerName);
    return (
      <div>
        <div>
          <Title />
          <MainSearch searchData={getSummonerName} />
        </div>
        <div className="tile is-ancestor">
          <MatchHistory summonerName={summonerName} />
        </div>
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