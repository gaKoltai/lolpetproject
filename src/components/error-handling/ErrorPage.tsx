import React from "react";
import styled from "styled-components";
import ErrorImage from "./ErrorImage";
import ErrorMessage from "./ErrorMessage";

const StyledErrorPage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    max-height: 94vh;
    border-radius: 4px;
    border-style: none;
    padding: 5rem;
    text-align: center;
`;

interface Props {
    errorCode?: string;
    errorMessage?: string;
}

const ErrorPage = (props: Props) => {
    return (
        <StyledErrorPage>
            <ErrorMessage>{props.errorMessage}</ErrorMessage>
            <ErrorImage img={require("../../static/images/misc/sad.png")} alt="Sad emoji" />
            <ErrorMessage>Please try again</ErrorMessage>
        </StyledErrorPage>
    );
};

export default ErrorPage;
