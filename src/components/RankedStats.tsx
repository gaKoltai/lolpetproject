import React, { useEffect, useState, useContext } from "react";
import { rankedEndpoint, apiGet } from "../static/util/utilities";
import { RankedStat } from "../static/util/jsonDataInterfaces";
import RankedStatTile from "./RankedStatTile";
import { TitleTile } from "./TitleTile";
import { RegionContext } from "./context/RegionProvider";
import axios, { AxiosResponse } from "axios";

interface Props {
    summonerId: string;
}

export const RankedStats: React.FC<Props> = ({ summonerId }) => {
    const [rankedStats, setRankedStats] = useState<RankedStat[] | null>();
    const [region, setRegion] = useContext(RegionContext);

    useEffect(() => {
        const fetch = () => {
            axios.get(rankedEndpoint + region + "/" + summonerId).then((response: AxiosResponse<RankedStat[]>) => {
                setRankedStats(response.data);
            });
        };
        fetch();
    }, [summonerId]);

    const id = require("uuid/v1");

    return (
        <div className="tile is-parent is-vertial">
            <div className="tile is-child">
                <TitleTile title={"Rank"} />
                {rankedStats &&
                    rankedStats.map((stat: RankedStat) => {
                        return <RankedStatTile stat={stat} key={id()} />;
                    })}
            </div>
        </div>
    );
};
