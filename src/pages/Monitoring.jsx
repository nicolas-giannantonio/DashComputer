import React, { useEffect, useState } from "react";

function Monitoring() {
  const [monitor, SetMonitor] = useState("");
  const [temp, setTemp] = useState("");
  const [play, setPlay] = useState(false);
  const [speedTest, setSpeedTest] = useState(0);
  /* console.log(play); */

  /* useEffect(() => {
    if (play) {
        setTimeout(() => {
            let res = api.req_monitor();
            res.then((r) => SetMonitor(r)).catch((e) => console.log(e)); 
        }, 3000);
      
    }
  }, [play]); */

  if (play) {
    let res = api.req_monitor();
    res.then((r) => SetMonitor(r)).catch((e) => console.log(e));
  }

  useEffect(() => {
    let res = api.req_speedTest();
    res.then((r) => setSpeedTest(r)).catch((e) => console.log(e));
  }, [speedTest]);
  console.log(speedTest);

  /* useEffect(() => {
    let res = api.req_inetChecksite();
    res.then((r) => setTemp(r)).catch((e) => console.log(e));
  }, [setTimeout(() => {}, 300)]);

  console.log("temp = ", temp); */

  return (
    <div className="container monitor">
      <p className="title-container">Monitoring (live cpu)</p>

      <div className="container-row">
        <button
          className="launch"
          onClick={() => {
            play ? setPlay(false) : setPlay(true);
          }}
          style={
            play
              ? { backgroundColor: "rgb(255, 152, 152)" }
              : { backgroundColor: "rgb(175, 255, 194)" }
          }
        >
          {play ? "Arreter" : "Lancer"}
        </button>
        <p className="under-up">
          <span
            style={
              monitor.avgLoad < 50 ? { color: "#136E4F" } : { color: "orange" }
            }
            className="important-data"
          >
            {monitor.avgLoad == undefined
              ? "..."
              : Math.floor(monitor.avgLoad) + "%"}
          </span>

          <span className="subtitle-data">(Average Load)</span>
        </p>

        <p className="under-up">
          <span
            style={
              monitor.currentLoad < 50
                ? { color: "#136E4F" }
                : { color: "orange" }
            }
            className="important-data"
          >
            {monitor.currentLoad == undefined
              ? "..."
              : Math.floor(monitor.currentLoad) + "%"}
          </span>
          <progress value={Math.floor(monitor.currentLoad)} max="100" />
          <span className="subtitle-data">(total)</span>
        </p>
        <p className="under-up">
          <span
            style={
              monitor.currentLoadUser < 50
                ? { color: "#136E4F" }
                : { color: "orange" }
            }
            className="important-data"
          >
            {monitor.currentLoadUser == undefined
              ? "..."
              : Math.floor(monitor.currentLoadUser) + "%"}
          </span>
          {/*           <progress value={Math.floor(monitor.currentLoadUser)} max="100" />
           */}
          <span className="subtitle-data">(Utilisateur)</span>
        </p>
        <p className="under-up">
          <span
            style={
              monitor.currentLoadSystem < 50
                ? { color: "#136E4F" }
                : { color: "orange" }
            }
            className="important-data"
          >
            {" "}
            {monitor.currentLoadSystem == undefined
              ? "..."
              : Math.floor(monitor.currentLoadSystem) + "%"}
          </span>
          {/*           <progress value={Math.floor(monitor.currentLoadSystem)} max="100" />
           */}
          <span className="subtitle-data">(Systeme)</span>
        </p>
        <p className="under-up">
          <span
            style={
              monitor.currentLoadIdle > 50
                ? { color: "#136E4F" }
                : { color: "orange" }
            }
            className="important-data"
          >
            {" "}
            {monitor.currentLoadIdle == undefined
              ? "..."
              : Math.floor(monitor.currentLoadIdle) + "%"}
          </span>

          <span className="subtitle-data">(Inactive)</span>
        </p>
        {/* <p className="under-up">
          <span className="important-data">
            {monitor.currentLoadNice == undefined
              ? "..."
              : monitor.currentLoadNice + "%"}
          </span>
          <span className="subtitle-data">(Current Load Nice)</span>
        </p> */}
      </div>

      <p className="title-container">SpeedTest </p>

      <div className="container-row">
        <p className="under-up">
          <span className="important-data">
            {speedTest == 0 ? "..." : speedTest.toFixed(2)}
          </span>
          <span className="subtitle-data">(Mb/s)</span>
        </p>
      </div>
    </div>
  );
}

export default Monitoring;
