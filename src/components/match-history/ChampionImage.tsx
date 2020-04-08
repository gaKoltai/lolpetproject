import React from "react";
import styled from "styled-components";

const StyledChampionImage = styled.img`
    height: auto;
    margin: 0.2rem;
    width: 8%;
`;

interface Props {
    champion: string;
}

const ChampionImage = (props: Props) => {
    return (
        <StyledChampionImage
            src={"http://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/" + props.champion + ".png"}
            alt={props.champion}
        ></StyledChampionImage>
    );
};

export default ChampionImage;
