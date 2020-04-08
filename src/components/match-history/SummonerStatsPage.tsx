import React, { useContext, useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { RegionContext } from "../context/RegionProvider";
import { summonerEndpoint } from "../../static/util/utilities";
import { Summoner } from "../../static/util/jsonDataInterfaces";
import Hero from "../index/Hero";
import ErrorPage from "../error-handling/ErrorPage";
import { SummonerDataContext } from "../context/SummonerDataProvider";
import axios, { AxiosResponse } from "axios";
import HistoryContainer from "./HistoryContainer";
import LoadingSpinner from "../misc/LoadingSpinner";

interface Props {}

const SummonerStatsPage = (props: Props) => {
    const [summoner, setSummoner] = useContext(SummonerDataContext);

    const { summonerName } = useParams();
    const [region, setRegion] = useContext(RegionContext);
    const [errorCode, setErrorCode] = useState();
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
                    <Fragment>
                        <HistoryContainer />
                    </Fragment>
                )
            ) : (
                <ErrorPage errorMessage={"Something went wrong"} />
            )}
        </Hero>
    );
};

export default SummonerStatsPage;
