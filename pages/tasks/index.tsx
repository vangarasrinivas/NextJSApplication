import React from "react";
import Navbar from "../components/Navbar";
import Ranking from "@/components/Ranking";

const index = () => {
  const jsonObj = {
    "Best Mattress For Stomach Sleepers Rank": {},
    "Best Mattress In Box Rank": {
      is_tied: true,
      rank: "9",
    },
    "Best Lower Priced Mattresses Rank": {
      is_tied: true,
      rank: "5",
    },
    "Best Spring Mattress Rank": {},
    "Overall Rank": {
      is_tied: true,
      rank: "13",
    },
    "Best Foam Mattress Rank": {},
    "Best Organic Mattress Rank": {},
    "Best Memory Foam Mattress Rank": {},
    "Best Firm Mattress Rank": {},
    "Best Cheap Mattress Rank": {},
    "Best Latex Mattress Rank": {},
    "Best Mattress For Side Sleepers Rank": {
      is_tied: true,
      rank: "7",
    },
    "Best Mattress For Back Pain Rank": {
      is_tied: false,
      rank: "6",
    },
    "Best Cooling Mattress Rank": {
      is_tied: false,
      rank: "5",
    },
    "Best Hybrid Mattress Rank": {
      is_tied: true,
      rank: "8",
    },
    "Best Mattress For Heavy People Rank": {
      is_tied: true,
      rank: "3",
    },
    "Best Online Mattress Rank": {
      is_tied: true,
      rank: "11",
    },
  };
  const jsonObj2: any = {
    "Best Mattress For Stomach Sleepers Rank": {},
    "Best Mattress In Box Rank": {
      is_tied: true,
      rank: "9",
    },
    "Best Lower Priced Mattresses Rank": {
      is_tied: true,
      rank: "5",
    },
    "Best Spring Mattress Rank": {},
    "Overall Rank": {
      is_tied: true,
      rank: "13",
    },
    "Best Foam Mattress Rank": {},
    "Best Organic Mattress Rank": {},
    "Best Memory Foam Mattress Rank": {},
    "Best Firm Mattress Rank": {},
    "Best Cheap Mattress Rank": {},
    "Best Latex Mattress Rank": {},
    "Best Mattress For Side Sleepers Rank": {
      is_tied: true,
      rank: "7",
    },
    "Best Mattress For Back Pain Rank": {
      is_tied: false,
      rank: "6",
    },
    "Best Cooling Mattress Rank": {
      is_tied: false,
      rank: "5",
    },
    "Best Hybrid Mattress Rank": {
      is_tied: true,
      rank: "8",
    },
    "Best Mattress For Heavy People Rank": {
      is_tied: true,
      rank: "3",
    },
    "Best Online Mattress Rank": {
      is_tied: true,
      rank: "11",
    },
  };

  const arry =
    jsonObj &&
    Object.entries(jsonObj).map(([key, value]: any, i) => {
      // console.log({ key });
      // console.log({ value });
      return {
        rank: value.rank ? parseFloat(value.rank) : 0,
        string: `${value && value.rank ? "#" + value.rank : ""} in ${key
          .replace("Rank", "")
          .trim()} ${value && value.is_tied ? "(tie)" : ""}`,
      };
    });

  const ascOrder =
    arry &&
    arry
      .slice()
      .sort((a: any, b: any) => {
        return parseFloat(a.rank) - parseFloat(b.rank);
      })
      .filter((v: any, i: any) => v.rank > 0);

  let abcd: any = [];
  ascOrder &&
    ascOrder.map((v, i) => {
      v.rank == 13 ? abcd.unshift(v) : abcd.push(v);
    });

  const descOrder =
    arry &&
    arry
      .slice()
      .sort((a: any, b: any) => {
        return parseFloat(b.rank) - parseFloat(a.rank);
      })
      .filter((v: any, i: any) => v.rank > 0);

  // filtered the empty object and stored the keys

  const ranking_keys: any = Object.keys(jsonObj2).filter(
    (k) => Object.keys(jsonObj2[k]).length
  );

  // Sorted the keys array
  ranking_keys.sort((a: any, b: any) => jsonObj2[a].rank - jsonObj2[b].rank);

  // Moving the the overall best on top
  ranking_keys.unshift(ranking_keys.pop());

  const sorted_rankings = ranking_keys.reduce((acc: any, key: any) => {
    // const newKey = key.replace("Rank", "").replace("Overall", "Best Overall");
    acc[key] = jsonObj2[key];

    return acc;
  }, {});

  console.log("sorted_rankings", sorted_rankings);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
            Asending Order
          </h3>
          <Ranking Rankings={abcd} />
        </div>

        <div>
          <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
            Desending Order
          </h3>
          <Ranking Rankings={descOrder} />
        </div>
      </div>
      {Object.keys(sorted_rankings).map((key) => {
        return (
          <p style={{ textAlign: "center" }} key={key}>
            {jsonObj2[key]?.rank}{" "}
            {key.replace("Rank", "").replace("Overall", "Best Overall")}
          </p>
        );
      })}
    </div>
  );
};

export default index;
