import React, { useState } from "react";
import { MatchHistory } from "./components/MatchHistory";
import { Title } from "./components/Title";
import MainSearch from "./components/MainSearch";

const App: React.FC = () => {
  const [summonerName, setSummonerName] = useState<string | null>();

  const getSummonerName = (summonerName: string) => {
    setSummonerName(summonerName);
  };

  if (summonerName != null) {
    return (
      <div>
        <div>
          <Title />
          <MainSearch searchData={getSummonerName} />
        </div>
        <div className="tile is-ancestor">
          <MatchHistory name={summonerName} />
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
};

export default App;
