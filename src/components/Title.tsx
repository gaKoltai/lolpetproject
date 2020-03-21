import React from "react";
import styled from "styled-components";

const StyledMainPageTitle = styled.h1`
    font-size: 10rem;
    color: white;
`;

export const Title: React.SFC = () => {
    return <StyledMainPageTitle>KMS</StyledMainPageTitle>;
};
