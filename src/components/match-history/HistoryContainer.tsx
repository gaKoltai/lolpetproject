import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { RegionContext } from "../context/RegionProvider";
import { matchHistoryEndpoint, championData } from "../../static/util/utilities";
import axios, { AxiosResponse } from "axios";
import { SummonerDataContext } from "../context/SummonerDataProvider";
import { Match } from "./Match";
import { MatchHistory, QueueTypes, MatchInfo } from "../../static/util/jsonDataInterfaces";

const StyledMathHistoryDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(32, 43, 67, 0.8);
    padding: 1.5rem;
    width: 40%;
    margin: 2rem;
`;

interface Props {}

const HistoryContainer = (props: Props) => {
    const [matchHistory, setMatchHistory] = useState<null | MatchHistory>();
    const [champions, setChampions] = useState<any | null>();
    const [matchTypes, setMatchTypes] = useState<QueueTypes[] | null>();
    const [region, setRegion] = useContext(RegionContext);
    const [summoner, setSummoner] = useContext(SummonerDataContext);

    useEffect(() => {
        const fetch = (): void => {
            axios
                .get(matchHistoryEndpoint + region + "/" + summoner.accountId)
                .then((response: AxiosResponse<MatchHistory>) => {
                    setMatchHistory(response.data);
                });
            axios.get(championData).then((response: AxiosResponse<any>) => {
                setChampions(response.data["data"]);
            });
        };
        fetch();
    }, [summoner]);

    useEffect(() => {
        setMatchTypes(require("../../static/util/queueTypes.json"));
    }, []);

    return (
        <StyledMathHistoryDiv>
            {matchTypes &&
                matchHistory &&
                champions &&
                matchHistory.matches.map((match: MatchInfo) => {
                    return <Match key={match.gameId} match={match} champions={champions} matchTypes={matchTypes} />;
                })}
        </StyledMathHistoryDiv>
    );
};

export default HistoryContainer;
