import React from "react";
import moment from "moment";

interface MatchStats {
  minionsKilled: number;
  gameLength: number;
  queue: string;
  win: boolean;
  lane: string;
  kills: number;
  deaths: number;
  assists: number;
  multiKill: number;
  damage: number;
  gold: number;
  championName: string;
}

export const StatTile: React.FC<MatchStats> = ({
  minionsKilled,
  gameLength,
  queue,
  win,
  lane,
  kills,
  deaths,
  assists,
  multiKill,
  damage,
  gold,
  championName
}) => {
  let status: string = "";
  if (win) {
    status = "is-primary";
  } else {
    status = "is-danger";
  }

  const convertGameLengthToMinutes = () => {
    let kurvaAnyád = moment(gameLength, "hhmmss");
    console.log(kurvaAnyád);
  };

  convertGameLengthToMinutes();

  return (
    <div className={"tile is-parent box notification " + status}>
      <div className="tile is-child">
        <p>{queue}</p>
        <p>S</p>
        <p>D</p>
      </div>
      <div className="tile is-child">
        <figure className="image is-64x64">
          <img
            src={
              "http://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/" +
              championName +
              ".png"
            }
            className="is-rounded"
          ></img>
        </figure>
      </div>
      <div className="tile is-child">
        <p>{lane}</p>
      </div>
      <div className="tile is-child">
        <p>
          {kills} / {deaths} / {assists}
        </p>
      </div>
      <div className="tile is-child">
        <p>{multiKill}</p>
      </div>
      <div className="tile is-child">
        <p>{damage}</p>
      </div>
      <div className="tile is-child">
        <p>{gold}</p>
      </div>
    </div>
  );
};
