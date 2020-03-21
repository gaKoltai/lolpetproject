import React from "react";
import styled from "styled-components";

const StyledPrimaryButton = styled.button`
    background-color: rgb(244, 67, 72);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    padding: 1vh 1vw;
    cursor: pointer;
`;

const PrimaryButton = () => {
    return <StyledPrimaryButton>Sign in</StyledPrimaryButton>;
};

export default PrimaryButton;
