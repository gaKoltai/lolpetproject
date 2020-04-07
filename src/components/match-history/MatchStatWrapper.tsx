import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledStatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: center;
    align-items: center;
    margin: 0.2rem;
`;

interface Props {
    children: ReactNode;
}

const MatchStatWrapper = (props: Props) => {
    return <StyledStatWrapper>{props.children}</StyledStatWrapper>;
};

export default MatchStatWrapper;
