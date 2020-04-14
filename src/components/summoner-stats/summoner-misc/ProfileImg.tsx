import React from "react";
import styled from "styled-components";

const StyledProfileImgWrapper = styled.div`
    border-radius: 50%;
    padding: 0.2rem;
    border-color: rgb(121, 134, 163);
    border-style: solid;
    border-width: 1px;
    width: 16%;

    & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0px 0px;
        border-radius: 50%;
    }
`;

interface Props {
    imgId: number;
}

const ProfileImg = (props: Props) => {
    return (
        <StyledProfileImgWrapper>
            <img
                src={"http://ddragon.leagueoflegends.com/cdn/9.23.1/img/profileicon/" + props.imgId + ".png"}
                alt="Summoner Icon"
            ></img>
        </StyledProfileImgWrapper>
    );
};

export default ProfileImg;
