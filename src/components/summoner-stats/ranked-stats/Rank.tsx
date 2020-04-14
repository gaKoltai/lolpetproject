import React from "react";
import styled from "styled-components";
import { getColorByRank } from "../../../static/util/utilities";

interface StyleProps {
    tier: string;
}

const StyledRank = styled.p`
    font-weight: bold;
    color: ${(props: StyleProps) => getColorByRank(props.tier)};
    font-size: 1.15rem !important;
`;

interface Props {
    rank: string;
    tier: string;
}

const Rank = (props: Props) => {
    const capitalizeString = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return <StyledRank tier={props.tier}>{capitalizeString(props.tier) + " " + props.rank}</StyledRank>;
};

export default Rank;
