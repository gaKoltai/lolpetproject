import React, { ReactNode } from "react";
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

interface Props {

    children?: ReactNode;
}


const PrimaryButton = (props : Props) => {
    return <StyledPrimaryButton>{props.children}</StyledPrimaryButton>;
};

export default PrimaryButton;
