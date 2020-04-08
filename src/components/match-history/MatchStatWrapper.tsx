import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledStatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    justify-content: center;
    align-items: left;
    margin: 0.2rem;
    padding: 0.5rem;
`;

interface Props {
    children: ReactNode;
}

const MatchStatWrapper = (props: Props) => {
    return <StyledStatWrapper>{props.children}</StyledStatWrapper>;
};

export default MatchStatWrapper;
