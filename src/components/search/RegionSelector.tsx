import React, { useContext } from "react";
import { regions } from "../../static/util/utilities";
import styled from "styled-components";
import { RegionContext } from "../context/RegionProvider";

const StyledSelect = styled.select`
    background-color: rgb(19, 28, 46);
    border: none;
    border-radius: 4px;
    height: 80%;
    font-weight: bold;
    color: white;
    text-align: center;
    margin: 0 0.5vw;
`;

const RegionSelector: React.FC = () => {
    const [region, setRegion] = useContext(RegionContext);

    return (
        <StyledSelect onChange={e => setRegion(e.target.value)}>
            {regions.map(region => (
                <option key={region} value={region}>
                    {region}
                </option>
            ))}
        </StyledSelect>
    );
};

export default RegionSelector;
