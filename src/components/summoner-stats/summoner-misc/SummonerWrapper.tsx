import React from "react";
import styled from "styled-components";
import { Summoner } from "../../../static/util/jsonDataInterfaces";
import ProfileImg from "./ProfileImg";
import SummonerMiscData from "./SummonerMiscData";

const StyledSummonerWrapper = styled.div`
    display: flex;
    background-color: rgba(32, 43, 67, 0.8);
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 12vh;
    padding: 1.5rem;
    border-radius: 4px;
`;

interface Props {
    summoner: Summoner;
}

const SummonerWrapper = (props: Props) => {
    return (
        <StyledSummonerWrapper>
            <ProfileImg imgId={props.summoner.profileIconId} />
            <SummonerMiscData summonerName={props.summoner.name} level={props.summoner.summonerLevel} />
        </StyledSummonerWrapper>
    );
};

export default SummonerWrapper;
