import React, { useState, useEffect } from "react";
import {
  apiPost,
  matchHistoryEndpoint,
  championData,
  apiGet
} from "../util/utilities.js";
import Match from "./Match";
import MatchDataTitleTile from "./MatchDataTitleTile.js";

export default function MatchHistory(summonerName) {
  const [matchHistory, setMatchHistory] = useState();
  const [champions, setChampions] = useState();

  useEffect(() => {
    const fetch = () => {
      apiPost(matchHistoryEndpoint, summonerName, response => {
        setMatchHistory(response);
      });
      apiGet(championData, response => {
        setChampions(response["data"]);
      });
    };
    fetch();
  }, []);

  return (
    <div className="tile is-parent">
      <div className="tile is-parent is-vertical">
        <MatchDataTitleTile />
        {matchHistory &&
          champions &&
          matchHistory.matches.map(match => {
            return (
              <Match key={match.gameId} match={match} champions={champions} />
            );
          })}
      </div>
    </div>
  );
}
