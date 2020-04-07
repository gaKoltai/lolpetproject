import React from "react";
import styled from "styled-components";

const StyledResultText = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: ${(props: Props) => (props.win ? "#49b4ff" : "#ff5859")};
`;

interface Props {
    win: boolean;
}

const Result = (props: Props) => {
    const result = (function () {
        if (!props.win) {
            return "Victory";
        }

        return "Defeat";
    })();

    return <StyledResultText win={props.win}>{result}</StyledResultText>;
};

export default Result;
