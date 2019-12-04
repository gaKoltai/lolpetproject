import React from "react";
import { RankedStat } from "../util/jsonDataInterfaces";

interface Prop {
  stat: RankedStat;
}

const RankedStatTile: React.FC<Prop> = ({ stat }) => {
  const formattedRank = (function() {
    let rank = stat.tier.toLowerCase();

    return rank.charAt(0).toUpperCase() + rank.slice(1);
  })();

  return (
    <div className="tile is-ancestor box notification has-background-white-ter">
      <article className="tile is-child">
        <figure className="image is-128x128">
          <img
            src={require("../images/rankedIcons/Emblem_" +
              formattedRank +
              ".png")}
            alt="rank"
          />
        </figure>
      </article>
      <div className="tile is-child">
        <p>
          {formattedRank} {stat.rank}
        </p>
        <p>{stat.queueType}</p>
        <p>
          {stat.wins}W / {stat.losses}L /{" "}
          {((stat.wins / (stat.wins + stat.losses)) * 100).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default RankedStatTile;
