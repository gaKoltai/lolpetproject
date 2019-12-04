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
  level: number;
  timeStamp: number;
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
  championName,
  level,
  timeStamp
}) => {
  let status: string = "";
  if (win) {
    status = "is-primary";
  } else {
    status = "is-danger";
  }

  const formattedGameLength = (function(): any {
    return moment.duration(gameLength, "seconds");
  })();

  const kda = (function(): string {
    const rawKda = (kills + assists) / deaths;
    return rawKda.toFixed(2);
  })();

  const csMin = (function(): string {
    const rawCsMin = minionsKilled / (gameLength / 60);
    return rawCsMin.toFixed(1);
  })();

  const formattedTimeStamp = moment(timeStamp);

  return (
    <div className={"tile is-parent box notification " + status}>
      <div className="tile is-child">
        {win && <p className="has-text-weight-bold">VICTORY</p>}
        {!win && <p className="has-text-weight-bold">DEFEAT</p>}
        <p>
          {formattedGameLength._data.minutes +
            "m " +
            formattedGameLength._data.seconds +
            "s"}
        </p>
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
        <p>Level {level}</p>
        <p>
          {minionsKilled} ({csMin}) CS
        </p>
      </div>
      <div className="tile is-child">
        <p>
          {kills} / {deaths} / {assists}
        </p>
        <p>{kda} KDA</p>
      </div>
      <div className="tile is-child">
        <p className="has-text-weight-bold">
          {formattedTimeStamp.format("MMM Do")}
        </p>
        <p>{formattedTimeStamp.fromNow()}</p>
      </div>
    </div>
  );
};
