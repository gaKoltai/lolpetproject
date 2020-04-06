import React, { useState, useEffect, useContext } from "react";
import { Match } from "./Match";
import { matchHistoryEndpoint, championData, apiGet } from "../static/util/utilities";
import { TitleTile } from "./TitleTile";
import { MatchInfo, QueueTypes, SummonerData } from "../static/util/jsonDataInterfaces";
import { RegionContext } from "./context/RegionProvider";

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
    const [region, setRegion] = useContext(RegionContext);

    useEffect(() => {
        const fetch = (): void => {
            apiGet(matchHistoryEndpoint + region + "/" + summoner.accountId, (response: MatchHistory) => {
                setMatchHistory(response);
            });
            apiGet(championData, (response: any) => {
                setChampions(response["data"]);
            });
        };
        fetch();
    }, [summoner]);

    useEffect(() => {
        setMatchTypes(require("../static/util/queueTypes.json"));
    }, []);

    return (
        <div className="tile is-parent is-vertical box">
            <TitleTile title={"Match History"} />
            {matchTypes &&
                matchHistory &&
                champions &&
                matchHistory.matches.map((match: MatchInfo) => {
                    return <Match key={match.gameId} match={match} champions={champions} matchTypes={matchTypes} />;
                })}
        </div>
    );
};
