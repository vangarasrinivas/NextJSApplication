import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

const index = () => {
  const [today1, setToday1] = useState(new Date().toLocaleTimeString());
  // const today = new Date();
  // const [sec, setSec]: any = useState();
  // const [min, setMin]: any = useState();
  // const [hr, setHr]: any = useState();

  // const generateTime = () => {
  //   const sec = today.getSeconds();
  //   setSec(sec);
  //   const mins = today.getMinutes();
  //   setMin(mins);
  //   const hrs = today.getHours();
  //   setHr(hrs);
  // };

  // setInterval(() => generateTime(), 1000);

  useEffect(()=>{
    return clearInterval(today1)
  })
  setInterval(() => {
    setToday1(new Date().toLocaleTimeString());
  }, 1000);



  const [count, setCount] = useState(0);
  // let id: any = useRef();
  const [timerInt, setTimerInt]:any=useState()

  useEffect(() => {
    return () => clearInterval(timerInt);
  }, []);

  const timerSTart = () => {
    // id.current = setInterval(() => {
    //   setCount((prev) => prev + 1);
    // }, 1000);

    setTimerInt(setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000))
  };

  const onPause = () => {
    clearInterval(timerInt);
  };
  const onReset = () => {
    clearInterval(timerInt);
    setCount(0);
  }; 

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <div style={{ border: "1px solid" }}>
          <h2>Current Time</h2>
          <h3>
            {/* {hr} : {min} : {sec} */}
            {today1}
          </h3>
        </div>
        <div style={{ border: "1px solid", marginTop: "10px" }}>
          <h2>Stop Watch</h2>
          <h3>
            {/* {hr} : {min} : {sec} */}
            {count}
          </h3>
          <div style={{ marginBottom: "10px" }}>
            <button onClick={() => timerSTart()}>
              {count != 0 ? "Restart" : "Start"}
            </button>
            <button onClick={() => onPause()}>Pause</button>
            <button onClick={() => onReset()}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
