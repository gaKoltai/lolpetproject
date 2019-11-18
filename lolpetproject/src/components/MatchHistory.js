import React, { useState, useEffect } from "react";
import { apiPost, matchHistoryEndpoint } from "../util/utilities.js";
import Match from "./Match";
import { useAsync } from "react-async";

export default function MatchHistory({ summonerName }) {
  const [matchHistory, setMatchHistory] = useState();

  useEffect(() => {
    const fetch = async () => {
      apiPost(matchHistoryEndpoint, summonerName, response => {
        setMatchHistory(response);
      });
    };
    fetch();
  }, []);

  return (
    <div>
      {matchHistory.match.map(match => {
        console.log(match);
      })}
    </div>
  );
}
