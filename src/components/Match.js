import React, { useState, useEffect } from "react";
import { apiPost, matchSpecificEndpoint } from "../util/utilities";
import WinTile from "./WinTile";
import LoseTIle from "./LoseTIle";

export default function Match({ match, champions }) {
  const [matchSpecific, setMatchSpecific] = useState();

  useEffect(() => {
    const fetch = () => {
      apiPost(matchSpecificEndpoint, { matchId: match.gameId }, response => {
        setMatchSpecific(response);
      });
    };
    fetch();
  }, []);

  function getPlayerStats() {
    const playerChampId = match.champion;

    for (let participant of matchSpecific.participants) {
      if (participant.championId === playerChampId) {
        return participant;
      }
    }
  }

  function getChampionName() {
    const championId = match.champion;

    for (let champion of Object.values(champions)) {
      if (parseInt(champion.key) === championId) {
        return champion.id;
      }
    }
  }

  if (matchSpecific) {
    if (getPlayerStats().stats.win === true) {
      return (
        <WinTile
          playerStats={getPlayerStats()}
          championName={getChampionName()}
          match={match}
        />
      );
    }
    return (
      <LoseTIle
        playerStats={getPlayerStats()}
        championName={getChampionName()}
        match={match}
      />
    );
  } else {
    return <div></div>;
  }
}
