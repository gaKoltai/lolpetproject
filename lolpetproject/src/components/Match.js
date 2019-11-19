import React, { useState, useEffect } from "react";
import { apiPost, matchSpecificEndpoint } from "../util/utilities";

export default function Match({ match }) {
  const [matchSpecific, setMatchSpecific] = useState();

  useEffect(() => {
    const fetch = () => {
      setTimeout(() => {
        apiPost(matchSpecificEndpoint, { matchId: match.gameId }, response => {
          setMatchSpecific(response);
        });
      }, 1000);
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

  if (matchSpecific) {
    const playerStats = getPlayerStats();
    console.log(playerStats);
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{playerStats.championId}</h1>
              <p className="subtitle">Kills: {playerStats.stats.kills}</p>
              <p className="subtitle">
                Damage dealt: {playerStats.stats.totalDamageDealtToChampions}
              </p>
              <p className="subtitle"></p>
              <p className="subtitle"></p>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <div></div>;
  }
}
