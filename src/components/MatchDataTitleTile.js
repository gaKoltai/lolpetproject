import React from "react";

export default function MatchDataTitleTile() {
  return (
    <div className="tile is-parent box notification">
      <div className="tile is-child">
        <p>Champion</p>
      </div>
      <div className="tile is-child">
        <p>Role</p>
      </div>
      <div className="tile is-child">
        <p>K / D / A</p>
      </div>
      <div className="tile is-child">
        <p>Largest Multikill</p>
      </div>
      <div className="tile is-child">
        <p>Damage dealt</p>
      </div>
      <div className="tile is-child">
        <p>Gold</p>
      </div>
    </div>
  );
}
