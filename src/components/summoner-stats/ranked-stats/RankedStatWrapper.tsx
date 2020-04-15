import styled from "styled-components";
import { IRankedStat } from "../../../static/util/jsonDataInterfaces";
import React, { useEffect, useState, useContext, Fragment } from "react";
import { rankedEndpoint, convertRomanNumtoArabic } from "../../../static/util/utilities";
import axios, { AxiosResponse } from "axios";
import { RegionContext } from "../../context/RegionProvider";
import RankedImage from "./RankedImage";
import RankedStat from "./RankedStat";

const StyledRankedStatWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(32, 43, 67, 0.8);
    width: 100%;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-radius: 4px;
`;

interface Props {
    summonerId: string;
}

const RankedStatWrapper = (props: Props) => {
    const [rankedStats, setRankedStats] = useState<null | IRankedStat[]>();
    const [region, setRegion] = useContext(RegionContext);

    const formatRank = (rankedStats: IRankedStat[]) => {
        for (let rankedstat of rankedStats) {
            rankedstat.tier = rankedstat.tier.toLowerCase();
            rankedstat.rank = convertRomanNumtoArabic(rankedstat.rank);
        }
    };

    useEffect(() => {
        const fetch = () => {
            axios
                .get(rankedEndpoint + region + "/" + props.summonerId)
                .then((response: AxiosResponse<IRankedStat[]>) => {
                    formatRank(response.data);
                    setRankedStats(response.data);
                });
        };
        fetch();
    }, [props.summonerId]);

    return (
        <StyledRankedStatWrapper>
            {rankedStats && (
                <Fragment>
                    <RankedImage tier={rankedStats[0].tier} rank={rankedStats[0].rank} />
                    <RankedStat rankedstats={rankedStats[0]} />
                </Fragment>
            )}
        </StyledRankedStatWrapper>
    );
};

export default RankedStatWrapper;
