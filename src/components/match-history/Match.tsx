import React, { useState, useEffect, useContext, Fragment } from "react";
import { matchSpecificEndpoint, calculateKDA } from "../../static/util/utilities";
import { MatchInfo, QueueTypes, MatchSpecific, Participant } from "../../static/util/jsonDataInterfaces";
import { RegionContext } from "../context/RegionProvider";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";
import MatchStatWrapper from "./MatchStatWrapper";
import ChampionImage from "./ChampionImage";
import Result from "./Result";

interface StyleProps {
    win?: boolean;
}

const StyledMatchDiv = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 4rem;
    color: white;
    border-radius: 4px;
    background-color: #182031;
    margin: 0.1rem;

    &::before {
        content: "";
        width: 0.5rem;
        background-color: ${(props: StyleProps) => (props.win ? "#49b4ff" : "#ff5859")};
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`;

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
            axios
                .get(matchSpecificEndpoint + region + "/" + match.gameId)
                .then((response: AxiosResponse<MatchSpecific>) => {
                    setMatchSpecific(response.data);
                    getPlayerStats(response.data);
                    getChampionName();
                    getMatchType(response.data);
                });
        };
        fetch();
    }, []);

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

    return (
        <StyledMatchDiv win={playerStats?.stats.win}>
            {matchSpecific && playerStats && championName && matchType && (
                <Fragment>
                    <ChampionImage champion={championName} />
                    <MatchStatWrapper>
                        <Result win={playerStats.stats.win} />
                    </MatchStatWrapper>
                    <MatchStatWrapper>
                        <p>{playerStats.stats.kills}</p>
                    </MatchStatWrapper>
                    <MatchStatWrapper>
                        <p>
                            {calculateKDA(playerStats.stats.kills, playerStats.stats.assists, playerStats.stats.deaths)}
                        </p>
                    </MatchStatWrapper>
                </Fragment>
            )}
        </StyledMatchDiv>
    );
};
