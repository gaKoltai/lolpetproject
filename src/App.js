import React, { useState, useRef } from "react";
import SummonerStats from "./components/SummonerStats";

function App() {
  const [summonerData, setSummonerData] = useState([]);
  const searchValue = useRef();

  function apiPost(url, data, callback) {
    fetch(url, {
      method: "POST",
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(jsonresponse => {
        callback(jsonresponse);
      });
  }

  function handleSearchForSummoner(e) {
    const summonerName = {name: searchValue.current.value};
    const ownApi = "http://localhost:8080/summoner"

    if (summonerName === "") return;

    apiPost(ownApi,summonerName, jsonresponse => {
        setSummonerData(jsonresponse)
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Summoner name..."
        ref={searchValue}
        name="name"
        id="id"
      ></input>
      <button onClick={handleSearchForSummoner}>Search</button>
      <SummonerStats stats={summonerData} />
    </div>
  );
}

export default App;
