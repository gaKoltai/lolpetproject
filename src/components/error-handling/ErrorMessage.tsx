import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledErrorMessage = styled.p`
    font-size: 4rem;
    color: white;
`;

interface Props {
    children: ReactNode;
}

const ErrorMessage = (props: Props) => {
    return <StyledErrorMessage> {props.children}</StyledErrorMessage>;
};

export default ErrorMessage;
