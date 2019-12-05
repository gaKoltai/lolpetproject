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

  const style = summoner ? "has-background-white-ter" : "";

  return (
    <div>
      <div>
        <Title />
      </div>
      <div className={style}>
        <div className="container">
          <MainSearch searchData={getSummonerName} />
          {summoner && (
            <div className="tile is-ancestor">
              <AdditionalData summoner={summoner} />
              <MatchHistory summoner={summoner} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
