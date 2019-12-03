import React, { useState, useEffect } from "react";
import { Match } from "./Match";
import { MatchInfo, QueueTypes } from "../util/dataInterfaces";
import {
  apiPost,
  matchHistoryEndpoint,
  championData,
  apiGet,
  matchTypesEndpoint
} from "../util/utilities";
import { MatchDataTitleTile } from "./MatchDataTitleTile";

interface MatchHistory {
  matches: MatchInfo[];
  endIndex: number;
  startIndex: number;
  totalGames: number;
}

export interface SummonerName {
  name: string;
}

export const MatchHistory: React.FC<SummonerName> = ({ name }) => {
  const [matchHistory, setMatchHistory] = useState<MatchHistory | null>();
  const [champions, setChampions] = useState<any | null>();
  const [matchTypes, setMatchTypes] = useState<QueueTypes[] | null>();

  useEffect(() => {
    const fetch = () => {
      apiPost(
        matchHistoryEndpoint,
        { name: name },
        (response: MatchHistory) => {
          setMatchHistory(response);
        }
      );
      apiGet(championData, (response: any) => {
        setChampions(response["data"]);
      });
      apiGet(matchTypesEndpoint, (response: QueueTypes[]) => {
        setMatchTypes(response);
      });
    };
    fetch();
  }, []);

  return (
    <div className="tile is-parent">
      <div className="tile is-parent is-vertical box">
        <MatchDataTitleTile />
        {matchTypes &&
          matchHistory &&
          champions &&
          matchHistory.matches.map((match: MatchInfo) => {
            return (
              <Match
                key={match.gameId}
                match={match}
                champions={champions}
                matchTypes={matchTypes}
              />
            );
          })}
      </div>
    </div>
  );
};
