import React, { useState, useEffect } from "react";
import { apiPost, matchHistoryEndpoint } from "../util/utilities.js";
import Match from "./Match";

export default function MatchHistory(summonerName) {
  const [matchHistory, setMatchHistory] = useState();

  useEffect(() => {
    const fetch = () => {
      apiPost(matchHistoryEndpoint, summonerName, response => {
        setMatchHistory(response);
      });
    };
    fetch();
  }, []);

  return (
    <div>
      {matchHistory &&
        matchHistory.matches.map(match => {
          return <Match key={match.gameId} match={match} />;
        })}
    </div>
  );
}
