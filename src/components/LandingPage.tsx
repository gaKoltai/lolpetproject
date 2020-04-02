import React from "react";
import styled from "styled-components";
import MainSearchField from "./search/MainSearchField";
import { Title } from "./Title";

export const Hero = styled.div`
    height: 100vh;
    width: 100vw;
    /*background: linear-gradient(to top, rgb(39, 54, 82) 0%, rgb(32, 43, 67) 100%);*/
    background-image: url(${require("../static/images/backgrounds/runeterra.jpg")});
    box-shadow: inset 0 0 0 100vmax rgba(32, 43, 67, 0.8);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10vw;
`;

const LandingPage = () => {
    return (
        <Hero>
            <Title />
            <MainSearchField />
        </Hero>
    );
};

export default LandingPage;
