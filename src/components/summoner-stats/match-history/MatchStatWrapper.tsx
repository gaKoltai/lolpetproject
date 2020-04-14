import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledStatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    justify-content: center;
    align-items: left;
    margin: 1rem;
    flex-wrap: nowrap;
`;

interface Props {
    children: ReactNode;
}

const MatchStatWrapper = (props: Props) => {
    return <StyledStatWrapper>{props.children}</StyledStatWrapper>;
};

export default MatchStatWrapper;
