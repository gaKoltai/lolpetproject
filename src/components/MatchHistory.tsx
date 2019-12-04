import React, { useState, useEffect } from "react";
import { Match } from "./Match";
import {
  apiPost,
  matchHistoryEndpoint,
  championData,
  apiGet,
  matchTypesEndpoint
} from "../util/utilities";
import { TitleTile } from "./TitleTile";
import {
  MatchInfo,
  QueueTypes,
  SummonerData
} from "../util/jsonDataInterfaces";

interface MatchHistory {
  matches: MatchInfo[];
  endIndex: number;
  startIndex: number;
  totalGames: number;
}

export interface SummonerName {
  name: string;
}

export const MatchHistory: React.FC<SummonerData> = ({ summoner }) => {
  const [matchHistory, setMatchHistory] = useState<MatchHistory | null>();
  const [champions, setChampions] = useState<any | null>();
  const [matchTypes, setMatchTypes] = useState<QueueTypes[] | null>();

  console.log(summoner.accountId);

  useEffect(() => {
    const fetch = (): void => {
      apiPost(
        matchHistoryEndpoint,
        { id: summoner.accountId },
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
  }, [summoner]);

  return (
    <div className="tile is-parent">
      <div className="tile is-parent is-vertical box">
        <TitleTile title={"Match History"} />
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
