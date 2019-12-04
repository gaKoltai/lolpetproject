import React from "react";
import { SummonerData } from "../util/jsonDataInterfaces";

const SummonerStats: React.FC<SummonerData> = ({ summoner }) => {
  return (
    <div className="tile is-child">
      <figure className="image is-128x128">
        {summoner && (
          <img
            src={
              "http://ddragon.leagueoflegends.com/cdn/9.23.1/img/profileicon/" +
              +summoner.profileIconId +
              ".png"
            }
            className="is-rounded"
          ></img>
        )}
      </figure>
    </div>
  );
};

export default SummonerStats;
