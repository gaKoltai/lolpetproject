import React from "react";
import { RankedStats } from "./RankedStats";
import { SummonerData } from "../util/jsonDataInterfaces";
import SummonerStats from "./SummonerStats";

const AdditionalData: React.FC<SummonerData> = ({ summoner }) => {
  return (
    <div className="tile is-child is-vertical">
      <SummonerStats summoner={summoner} />
      <RankedStats summonerId={summoner.id} />
    </div>
  );
};

export default AdditionalData;
