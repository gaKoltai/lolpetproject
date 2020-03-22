import React, { useContext, useEffect, Fragment } from "react";
import AdditionalData from "./AdditionalData";
import { MatchHistory } from "./MatchHistory";
import { apiGet, summonerEndpoint } from "../static/util/utilities";
import { Summoner } from "../static/util/jsonDataInterfaces";
import { SummonerContext } from "./context/SummonerProvider";
import { useParams } from "react-router-dom";

interface Props {}

const SummonerLandingPage = () => {
    const [summoner, setSummoner] = useContext(SummonerContext);

    const { summonerName } = useParams();

    useEffect(() => {
        const fetch = (): void => {
            apiGet(summonerEndpoint + summonerName, (response: Summoner) => {
                setSummoner(response);
            });
        };
        fetch();
    }, [summonerName]);

    return (
        <div className="tile is-ancestor">
            {summoner && (
                <Fragment>
                    <AdditionalData summoner={summoner} />
                    <MatchHistory summoner={summoner} />
                </Fragment>
            )}
        </div>
    );
};

export default SummonerLandingPage;
