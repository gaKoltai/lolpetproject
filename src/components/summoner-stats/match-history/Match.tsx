import React, { useState, useEffect, useContext, Fragment } from "react";
import { matchSpecificEndpoint } from "../../../static/util/utilities";
import { MatchInfo, QueueTypes, SortedMatchData } from "../../../static/util/jsonDataInterfaces";
import { RegionContext } from "../../context/RegionProvider";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";
import MatchStatWrapper from "./MatchStatWrapper";
import ChampionImage from "./ChampionImage";
import Result from "./Result";
import { trackPromise } from "react-promise-tracker";

interface StyleProps {
    win?: boolean;
}

const StyledMatchDiv = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 4rem;
    color: white;
    border-radius: 4px;
    border-left: 0.3rem solid ${(props: StyleProps) => (props.win ? "#49b4ff" : "#ff5859")};
    background-color: #182031;
    margin: 0.1rem;
    justify-content: space-between;
    align-items: flex-start;

    & .secondary {
        color: rgb(121, 134, 163);
        font-weight: bold;
    }
`;

interface Props {
    match: MatchInfo;
    champions: Object;
    matchTypes: QueueTypes[];
}

export const Match = (props: Props) => {
    const [playerStats, setPlayerStats] = useState<SortedMatchData | null>();
    const [championName, setChampionName] = useState<string | null>();
    const [matchType, setMatchType] = useState<QueueTypes | null>();
    const [region, setRegion] = useContext(RegionContext);

    useEffect(() => {
        const fetch = (): void => {
            trackPromise(
                axios.get(`${matchSpecificEndpoint + region}/${props.match.gameId}?championId=${props.match.champion}`)
            ).then((response: AxiosResponse<SortedMatchData>) => {
                setPlayerStats(response.data);
                getMatchType(response.data);
                getChampionName();
            });
        };
        fetch();
    }, []);

    const getChampionName = (): void => {
        const championId: number = props.match.champion;

        for (let champion of Object.values(props.champions)) {
            if (parseInt(champion.key) === championId) {
                setChampionName(champion.id);
            }
        }
    };

    const getMatchType = (response: SortedMatchData): void => {
        let queueId = response.queueId;

        for (let queueType of Object.values(props.matchTypes)) {
            if (queueId === queueType.queueId) {
                setMatchType(queueType);
            }
        }
    };

    const fixedGameLengthSeconds = (seconds: number) => {
        if (seconds < 10) {
            return `0${seconds}`;
        }

        return seconds;
    };

    return (
        <StyledMatchDiv win={playerStats?.win}>
            {playerStats && championName && matchType && (
                <Fragment>
                    <ChampionImage champion={championName} />
                    <MatchStatWrapper>
                        <Result win={playerStats.win} />
                    </MatchStatWrapper>
                    <MatchStatWrapper>
                        <p>{playerStats.kda} KDA</p>
                        <p className="secondary">
                            {playerStats.kills} / {playerStats.deaths} / {playerStats.assists}{" "}
                        </p>
                    </MatchStatWrapper>
                    <MatchStatWrapper>
                        <p>{playerStats.visionScorePerMin} Vis/min</p>
                        <p className="secondary">{playerStats.killParticipation}% KP</p>
                    </MatchStatWrapper>
                    <MatchStatWrapper>
                        <p>{playerStats.csPerMin} CS/min</p>
                        <p className="secondary">{playerStats.minionsKilled} CS</p>
                    </MatchStatWrapper>
                    <MatchStatWrapper>
                        <p>{playerStats.damagePerMin} DMG/min</p>
                        <p className="secondary">{playerStats.damagePercentOfTotal}% of team</p>
                    </MatchStatWrapper>
                    <MatchStatWrapper>
                        <p>
                            {playerStats.gameLength.minutes}:{fixedGameLengthSeconds(playerStats.gameLength.seconds)}
                        </p>
                        <p className="secondary">{matchType.description}</p>
                    </MatchStatWrapper>
                </Fragment>
            )}
        </StyledMatchDiv>
    );
};
