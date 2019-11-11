import React from "react";
import uuidv4 from "uuid/v4";
import Champion from "./Champion";

export default function SummonerStats({ stats }) {
  return stats.map(champion => {
    return <Champion key={uuidv4()} champion={champion} />;
  });
}
