import React from "react";

interface Props {
  title: string;
}

export const TitleTile: React.SFC<Props> = ({ title }) => {
  return (
    <div className="box">
      <p>{title}</p>
    </div>
  );
};
