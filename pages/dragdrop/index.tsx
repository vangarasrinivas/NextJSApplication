import React, { useState } from "react";
import Navbar from "../components/Navbar";

const index = () => {
  const [draggedData, setDraggedData]: any = useState([]);
  const [dropHover, setDropHover] = useState(false);
  const [data, setData]: any = useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
  ]);
  console.log({ dropHover });
  let dragged: any = null;

  const startDrag = (dataItem: any, i: any) => {
    // e.dataTransfer.setData();

    dragged = { data: dataItem, index: i };
  };

  const onDrop = (e: any) => {
    e.preventDefault();

    if (e.target.className === "dropzone") {
      setData(data.toSpliced(dragged.index, 1));
      setDraggedData((prev: any) => [...prev, dragged.data]);
    }
  };
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        {data.map((item: any, i: any) => (
          <p key={item + i} draggable onDragStart={() => startDrag(item, i)}>
            {item}
          </p>
        ))}

        {/* Droppable Area */}

        <div
          className="dropzone"
          style={{
            border: "1px solid green",
            // minHeight: 100,
            padding: 10,
            marginTop: 10,
          }}
          onDrop={onDrop}
          onDragOver={(e) => {
            e.preventDefault();
            // setDropHover(true);
          }}
        >
          {draggedData.map((item: any) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
