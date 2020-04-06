import React from "react";
import styled from "styled-components";

const StyledErrorImage = styled.img`
    width: 30%;
    height: auto;
    margin: 2rem;
`;

interface Props {
    img: string;
    alt: string;
}

const ErrorImage = (props: Props) => {
    return <StyledErrorImage src={props.img} alt={props.alt} />;
};

export default ErrorImage;
