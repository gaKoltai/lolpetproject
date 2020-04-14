import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledMiscStatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    justify-content: flex-start;
    margin: 2rem 1rem;
`;

interface Props {
    children: ReactNode;
}

const MiscStatWrapper = (props: Props) => {
    return <StyledMiscStatWrapper>{props.children}</StyledMiscStatWrapper>;
};

export default MiscStatWrapper;
