import React from "react";

export const Tile = (props) => {

  const { object } = props;

  const rows = Object.values(object).map((value, i) => {
    return <p key={i} className={i==0 ? 'tile-title' : "tile"}>{value}</p>
  });

  return (
    <div className="tile-container">
      {rows}
    </div>
  );
};
