import React from "react";
import styled from "styled-components";

const StyledRankedImageWrapper = styled.div`
    border-radius: 50%;
    height: auto;
    width: 30%;
    padding: 0.2rem;
    border-color: rgb(121, 134, 163);
    border-style: solid;
    border-width: 3px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

interface Props {
    rank?: string;
    tier?: string;
}

const RankedImage = (props: Props) => {
    return (
        <StyledRankedImageWrapper>
            <img
                src={
                    props.rank && props.tier
                        ? `https://blitz-cdn.blitz.gg/ranks/${props.tier + "_" + props.rank}.png`
                        : "https://blitz-cdn.blitz.gg/ranks/default.png"
                }
                alt="ranked queue icon"
            />
        </StyledRankedImageWrapper>
    );
};

export default RankedImage;
