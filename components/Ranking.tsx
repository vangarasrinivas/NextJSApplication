import React from "react";

const Ranking = ({ Rankings }: any) => {
  return (
    <div
      style={{
        border: "1px solid",
        backgroundColor: "#c0c9c959",
        paddingRight: "60px",
        paddingLeft: "60px",
      }}
    >
      {Rankings &&
        Rankings.map((v: any, i: any) => {
          return (
            <h3 key={i} style={{ textAlign: "center" }}>
              {v.string}
            </h3>
          );
        })}
    </div>
  );
};

export default Ranking;
