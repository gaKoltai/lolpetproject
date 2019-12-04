import React, { useState } from "react";
import { MatchHistory } from "./components/MatchHistory";
import { Title } from "./components/Title";
import AdditionalData from "./components/AdditionalData";
import { Summoner } from "./util/jsonDataInterfaces";
import { apiPost, summonerEndpoint } from "./util/utilities";
import MainSearch from "./components/MainSearch";

const App: React.FC = () => {
  const [summoner, setSummoner] = useState<Summoner | null>(null);

  const getSummonerName = (summonerName: string | undefined): void => {
    apiPost(summonerEndpoint, { name: summonerName }, (response: Summoner) => {
      setSummoner(response);
    });
  };
  return (
    <div>
      <div>
        <Title />
        <MainSearch searchData={getSummonerName} />
      </div>
      {summoner && (
        <div className="tile is-ancestor">
          <AdditionalData summoner={summoner} />
          <MatchHistory summoner={summoner} />
        </div>
      )}
    </div>
  );
};

export default App;
