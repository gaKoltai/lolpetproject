import React, { useContext, useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { RegionContext } from "../context/RegionProvider";
import { summonerEndpoint } from "../../static/util/utilities";
import { Summoner } from "../../static/util/jsonDataInterfaces";
import Hero from "../index/Hero";
import ErrorPage from "../error-handling/ErrorPage";
import { SummonerDataContext } from "../context/SummonerDataProvider";
import axios, { AxiosResponse } from "axios";
import HistoryContainer from "./match-history/HistoryContainer";
import LoadingSpinner from "../misc/LoadingSpinner";
import SummonerWrapper from "./summoner-misc/SummonerWrapper";
import styled from "styled-components";
import RankedStatWrapper from "./ranked-stats/RankedStatWrapper";
import MiscStatWrapper from "./MiscStatWrapper";

const StyledSummonerStatsDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
`;

interface Props {}

const SummonerStatsPage = (props: Props) => {
    const [summoner, setSummoner] = useContext(SummonerDataContext);

    const { summonerName } = useParams();
    const [region, setRegion] = useContext(RegionContext);
    const [notFound, setNotfound] = useState(false);

    useEffect(() => {
        const fetch = (): void => {
            axios
                .get(summonerEndpoint + region + "/" + summonerName)
                .then((response: AxiosResponse<Summoner>) => {
                    setSummoner(response.data);
                })
                .catch(() => setNotfound(true));
        };
        fetch();
    }, [summonerName]);

    return (
        <Hero>
            <LoadingSpinner />
            {!notFound ? (
                summoner && (
                    <StyledSummonerStatsDiv>
                        <MiscStatWrapper>
                            <SummonerWrapper summoner={summoner} />
                            <RankedStatWrapper summonerId={summoner.id} />
                        </MiscStatWrapper>

                        <HistoryContainer />
                    </StyledSummonerStatsDiv>
                )
            ) : (
                <ErrorPage errorMessage={"Something went wrong"} />
            )}
        </Hero>
    );
};

export default SummonerStatsPage;
