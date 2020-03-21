import React from "react";

interface Props {
    title: string;
}

export const TitleTile: React.SFC<Props> = ({ title }) => {
    return (
        <div className="box">
            <p className="has-text-weight-bold is-size-4-desktop">{title}</p>
        </div>
    );
};
