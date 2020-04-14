import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyleProps {
    main?: boolean;
}

const StyledHero = styled.div`
    min-height: 94vh;
    min-width: 100vw;
    /*background: linear-gradient(to top, rgb(39, 54, 82) 0%, rgb(32, 43, 67) 100%);*/
    background-image: url(${require("../../static/images/backgrounds/runeterra.jpg")});
    box-shadow: inset 0 0 0 100vmax rgba(32, 43, 67, 0.8);
    background-size: cover;
    display: flex;
    flex-direction: ${(props: StyleProps) => (props.main ? "column" : "row")};
    justify-content: center;
    align-items: ${(props: StyleProps) => (props.main ? "center" : "flex-start")};
    padding: 0 10vw;
`;

interface Props {
    children?: ReactNode;
    main?: boolean;
}

const Hero = (props: Props) => {
    return <StyledHero main={props.main}>{props.children}</StyledHero>;
};

export default Hero;
