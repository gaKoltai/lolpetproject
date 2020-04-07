import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledHero = styled.div`
    height: 94vh;
    min-width: 100vw;
    /*background: linear-gradient(to top, rgb(39, 54, 82) 0%, rgb(32, 43, 67) 100%);*/
    background-image: url(${require("../static/images/backgrounds/runeterra.jpg")});
    box-shadow: inset 0 0 0 100vmax rgba(32, 43, 67, 0.8);
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 10vw;
`;

interface Props {
    children?: ReactNode;
}

const Hero = (props: Props) => {
    return <StyledHero>{props.children}</StyledHero>;
};

export default Hero;
