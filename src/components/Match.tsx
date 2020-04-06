import React, { useState, useEffect, useContext } from "react";
import { matchSpecificEndpoint, apiGet } from "../static/util/utilities";
import { StatTile } from "./StatTile";
import { MatchInfo, QueueTypes, MatchSpecific, Participant } from "../static/util/jsonDataInterfaces";
import { RegionContext } from "./context/RegionProvider";
interface RawMatchData {
    match: MatchInfo;
    champions: Object;
    matchTypes: QueueTypes[];
}

export const Match: React.FC<RawMatchData> = ({ match, champions, matchTypes }) => {
    const [matchSpecific, setMatchSpecific] = useState<MatchSpecific | null>();
    const [playerStats, setPlayerStats] = useState<Participant | null>();
    const [championName, setChampionName] = useState<string | null>();
    const [matchType, setMatchType] = useState<QueueTypes | null>();
    const [region, setRegion] = useContext(RegionContext);

    useEffect(() => {
        const fetch = (): void => {
            apiGet(matchSpecificEndpoint + region + "/" + match.gameId, (response: MatchSpecific) => {
                setMatchSpecific(response);
                getPlayerStats(response);
                getChampionName();
                getMatchType(response);
            });
        };
        fetch();
    }, [match]);

    const getPlayerStats = (response: MatchSpecific): void => {
        const playerChampId: number = match.champion;

        for (let participant of response.participants) {
            if (participant.championId === playerChampId) {
                setPlayerStats(participant);
            }
        }
    };

    const getChampionName = (): void => {
        const championId: number = match.champion;

        for (let champion of Object.values(champions)) {
            if (parseInt(champion.key) === championId) {
                setChampionName(champion.id);
            }
        }
    };

    const getMatchType = (response: MatchSpecific): void => {
        let queueId = response.queueId;

        for (let queueType of Object.values(matchTypes)) {
            if (queueId === queueType.queueId) {
                setMatchType(queueType);
            }
        }
    };

    if (matchSpecific && playerStats && championName && matchType) {
        return (
            <StatTile
                minionsKilled={playerStats.stats.totalMinionsKilled}
                gameLength={matchSpecific.gameDuration}
                queue={matchType}
                win={playerStats.stats.win}
                championName={championName}
                lane={playerStats.timeline.role}
                lane2={playerStats.timeline.lane}
                lane3={match.role}
                kills={playerStats.stats.kills}
                deaths={playerStats.stats.deaths}
                assists={playerStats.stats.assists}
                multiKill={playerStats.stats.largestMultiKill}
                damage={playerStats.stats.totalDamageDealtToChampions}
                gold={playerStats.stats.goldEarned}
                level={playerStats.stats.champLevel}
                timeStamp={match.timestamp}
            />
        );
    } else {
        return <div></div>;
    }
};
