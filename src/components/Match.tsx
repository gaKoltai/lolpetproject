import React, { useState, useEffect } from "react";
import { apiPost, matchSpecificEndpoint } from "../util/utilities";
import { StatTile } from "./StatTile";
import { MatchInfo, QueueTypes } from "../util/dataInterfaces";

interface RawMatchData {
  match: MatchInfo;
  champions: Object;
  matchTypes: QueueTypes[];
}

export const Match: React.FC<RawMatchData> = ({
  match,
  champions,
  matchTypes
}) => {
  const [matchSpecific, setMatchSpecific] = useState<any | null>();
  const [playerStats, setPlayerStats] = useState();
  const [championName, setChampionName] = useState();
  const [matchType, setMatchType] = useState();

  useEffect(() => {
    const fetch = () => {
      apiPost(
        matchSpecificEndpoint,
        { matchId: match.gameId },
        (response: any) => {
          setMatchSpecific(response);
          getPlayerStats(response);
          getChampionName();
          getMatchType(response);
        }
      );
    };
    fetch();
  }, []);

  const getPlayerStats = (response: any) => {
    const playerChampId: number = match.champion;

    for (let participant of response.participants) {
      if (participant.championId === playerChampId) {
        setPlayerStats(participant);
      }
    }
  };

  const getChampionName = () => {
    const championId: number = match.champion;

    for (let champion of Object.values(champions)) {
      if (parseInt(champion.key) === championId) {
        setChampionName(champion.id);
      }
    }
  };

  const getMatchType = (response: any) => {
    let queueId = response.queueId;

    for (let queueType of Object.values(matchTypes)) {
      if (queueId === queueType.queueId) {
        setMatchType(queueType.description);
      }
    }
  };

  if (matchSpecific && playerStats && championName && matchType) {
    return (
      <StatTile
        minionsKilled={playerStats.stats.totalMinionsKilled}
        gameLength={playerStats.gameDuration}
        queue={matchType}
        win={playerStats.stats.win}
        championName={championName}
        lane={match.lane}
        kills={playerStats.stats.kills}
        deaths={playerStats.stats.deaths}
        assists={playerStats.stats.assists}
        multiKill={playerStats.stats.largestMultiKill}
        damage={playerStats.stats.totalDamageDealtToChampions}
        gold={playerStats.stats.goldEarned}
      />
    );
  } else {
    return <div></div>;
  }
};
