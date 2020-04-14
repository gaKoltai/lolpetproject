import React from "react";
import styled from "styled-components";

const StyledSummonerDataWrapper = styled.div`
    color: white;
    margin-left: 10%;

    & h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    & p {
        font-size: 0.8rem;
        color: rgb(121, 134, 163);
        font-weight: bold;
    }
`;

interface Props {
    summonerName: string;
    level: number;
}

const SummonerMiscData = (props: Props) => {
    return (
        <StyledSummonerDataWrapper>
            <h2>{props.summonerName}</h2>
            <p>Level {props.level}</p>
        </StyledSummonerDataWrapper>
    );
};

export default SummonerMiscData;
