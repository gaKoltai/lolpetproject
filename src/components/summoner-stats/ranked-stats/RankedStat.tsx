import React from "react";
import { IRankedStat } from "../../../static/util/jsonDataInterfaces";
import styled from "styled-components";
import Rank from "./Rank";

const StyledRankedStatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin: 0 3rem;

    & .secondary {
        font-size: 0.8rem;
        color: rgb(121, 134, 163);
        font-weight: bold;
    }
`;

interface Props {
    rankedstats: IRankedStat;
}

const RankedStat = (props: Props) => {
    const calculateWinLossRatio = (wins: number, losses: number): string => {
        const totalGames = wins + losses;

        if (totalGames === 0) {
            return "0";
        }

        const winLossRatio = (wins / totalGames) * 100;

        return winLossRatio.toFixed(2);
    };

    return (
        <StyledRankedStatWrapper>
            <Rank tier={props.rankedstats.tier} rank={props.rankedstats.rank} />
            <p className="secondary">{props.rankedstats.leaguePoints} LP</p>
            <p className="secondary">
                {"(" +
                    props.rankedstats.wins +
                    "W " +
                    props.rankedstats.losses +
                    "L) " +
                    "(" +
                    calculateWinLossRatio(props.rankedstats.wins, props.rankedstats.losses) +
                    "%)"}
            </p>
        </StyledRankedStatWrapper>
    );
};

export default RankedStat;
