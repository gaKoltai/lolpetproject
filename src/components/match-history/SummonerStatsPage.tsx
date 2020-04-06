import React, { useContext, useEffect, Fragment, useState } from "react";
import { SummonerContext } from "../context/SummonerProvider";
import { useParams } from "react-router-dom";
import { RegionContext } from "../context/RegionProvider";
import { summonerEndpoint, apiGetWithErrorHandling } from "../../static/util/utilities";
import { Summoner } from "../../static/util/jsonDataInterfaces";
import AdditionalData from "../AdditionalData";
import { MatchHistory } from "../MatchHistory";
import { Hero } from "../index/LandingPage";
import ErrorPage from "../error-handling/ErrorPage";

interface Props {}

const SummonerStatsPage = (props: Props) => {
    const [summoner, setSummoner] = useContext(SummonerContext);

    const { summonerName } = useParams();
    const [region, setRegion] = useContext(RegionContext);
    const [errorCode, setErrorCode] = useState();
    const [notFound, setNotfound] = useState(false);

    useEffect(() => {
        const fetch = (): void => {
            apiGetWithErrorHandling(
                summonerEndpoint + region + "/" + summonerName,
                (response: Summoner) => {
                    setSummoner(response);
                },
                (response: any) => {
                    setNotfound(!notFound);
                    setErrorCode(response.status);
                }
            );
        };
        fetch();
    }, [summonerName]);

    return (
        <Hero>
            {!notFound ? (
                summoner && (
                    <Fragment>
                        <AdditionalData summoner={summoner} />
                        <MatchHistory summoner={summoner} />
                    </Fragment>
                )
            ) : (
                <ErrorPage errorMessage={"Something went wrong"} />
            )}
        </Hero>
    );
};

export default SummonerStatsPage;
