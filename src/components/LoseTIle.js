import React from "react";

export default function LoseTIle({ playerStats, championName, match }) {
  return (
    <div className="tile is-parent box notification is-danger is-centered">
      <div className="tile is-child ">
        <p>{championName}</p>
      </div>
      <div className="tile is-child">
        <p>{match.lane}</p>
      </div>
      <div className="tile is-child">
        <p>
          {playerStats.stats.kills} / {playerStats.stats.deaths} /{" "}
          {playerStats.stats.assists}
        </p>
      </div>
      <div className="tile is-child">
        <p>{playerStats.stats.largestMultiKill}</p>
      </div>
      <div className="tile is-child">
        <p>{playerStats.stats.totalDamageDealtToChampions}</p>
      </div>
      <div className="tile is-child">
        <p>{playerStats.stats.goldEarned}</p>
      </div>
    </div>
  );
}
