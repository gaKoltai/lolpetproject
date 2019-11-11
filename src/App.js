import React, { useState, useRef } from "react";
import SummonerStats from "./components/SummonerStats";

function App() {
  const [summonerData, setSummonerData] = useState([]);
  const searchValue = useRef();

  function apiGet(url, callback) {
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        callback(data);
      });
  }

  function handleSearchForSummoner(e) {
    const summonerName = searchValue.current.value;
    const riotSummonerApi =
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      summonerName +
      "?api_key=RGAPI-19998820-ce19-4e5b-afb8-e97ac00a208b";

    if (summonerName === "") return;

    apiGet(riotSummonerApi, data => {
      const summonerId = data.id;
      const riotChampionApi =
        "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
        summonerId +
        "?api_key=RGAPI-19998820-ce19-4e5b-afb8-e97ac00a208b";
      apiGet(riotChampionApi, data => {
        setSummonerData(data);
      });
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Summoner name..."
        ref={searchValue}
      ></input>
      <button onClick={handleSearchForSummoner}>Search</button>
      <SummonerStats stats={summonerData} />
    </div>
  );
}

export default App;
