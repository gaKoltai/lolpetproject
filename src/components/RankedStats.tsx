import React, { useEffect, useState } from "react";
import { rankedEndpoint, apiGet } from "../util/utilities";
import { RankedStat } from "../util/jsonDataInterfaces";
import RankedStatTile from "./RankedStatTile";
import { TitleTile } from "./TitleTile";

interface Props {
  summonerId: string;
}

export const RankedStats: React.FC<Props> = ({ summonerId }) => {
  const [rankedStats, setRankedStats] = useState<RankedStat[] | null>();

  useEffect(() => {
    const fetch = () => {
      apiGet(rankedEndpoint + summonerId, (response: RankedStat[]) => {
        setRankedStats(response);
      });
    };
    fetch();
  }, [summonerId]);

  const id = require("uuid/v1");

  return (
    <div className="tile is-parent is-vertial">
      <div className="tile is-child">
        <TitleTile title={"Rank"} />
        {rankedStats &&
          rankedStats.map((stat: RankedStat) => {
            return <RankedStatTile stat={stat} key={id()} />;
          })}
      </div>
    </div>
  );
};