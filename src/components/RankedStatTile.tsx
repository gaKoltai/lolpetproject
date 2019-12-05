import React from "react";
import { RankedStat } from "../util/jsonDataInterfaces";
import { formatQueueTypes } from "../util/utilities";

interface Prop {
  stat: RankedStat;
}

const RankedStatTile: React.FC<Prop> = ({ stat }) => {
  const formattedRank = (function() {
    let rank = stat.tier.toLowerCase();

    return rank.charAt(0).toUpperCase() + rank.slice(1);
  })();

  return (
    <div className="tile is-parent box">
      <div className="tile is-child">
        <figure className="image is-128x128">
          <img
            src={require("../images/rankedIcons/Emblem_" +
              formattedRank +
              ".png")}
            alt="rank"
            className="ranked-image"
          />
        </figure>
      </div>
      <div className="tile is-child">
        <p className="has-text-weight-bold is-size-5-desktop">
          {formattedRank} {stat.rank}
        </p>
        <p>{formatQueueTypes(stat.queueType)}</p>
        <p>
          {stat.leaguePoints}LP / {stat.wins}W {stat.losses}L /{" "}
          {((stat.wins / (stat.wins + stat.losses)) * 100).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default RankedStatTile;
