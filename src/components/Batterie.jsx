import React, { useEffect, useState } from "react";

function Batterie() {
  const [batterie, setBatterie] = useState("");

  useEffect(() => {
    let res = api.req_batterie();
    res.then((r) => setBatterie(r)).catch((e) => console.log(e));
  }, []);

  /*   console.log("data batterie : ", batterie);
   */
  return (
    <div className="container battery">
      <p className="title-container">Batterie</p>
      <p className="under-up">
        <span className="important-data">
          {batterie.isCharging ? (
            <span style={{ color: "green", fontWeight: "bold" }}>
              {batterie.percent}%
            </span>
          ) : (
            <span style={{ color: "black", fontWeight: "bold" }}>
              {batterie.percent}%
            </span>
          )}
        </span>
        <span className="subtitle-data">(Pourcentage)</span>
      </p>
      <p className="under-up">
        <span className="important-data">{batterie.timeRemaining + "min"}</span>
        <span className="subtitle-data">
          (Autonomie, {(batterie.timeRemaining / 60).toFixed(2)}h)
        </span>
      </p>
      <p className="under-up">
        <span className="important-data">{batterie.cycleCount}</span>
        <span className="subtitle-data">(Nombre de cycles)</span>
      </p>
      <p className="under-up">
        <span className="important-data">
          {Math.floor(batterie.maxCapacity / 1000)}Wh
        </span>
        <span className="subtitle-data">(Puissance)</span>
      </p>

      {/* <p className="under-up">
        <span className="important-data">
          {batterie.currentCapacity + batterie.capacityUnit}
        </span>
        <span className="subtitle-data">(Capacité)</span>
      </p> */}
      <p className="under-up">
        <span className="important-data">{batterie.voltage}V</span>
        <span className="subtitle-data">(Voltage)</span>
      </p>
      <p className="under-up">
        <span className="important-data">{batterie.type}</span>
        <span className="subtitle-data">(Type)</span>
      </p>
      <a className="link-bottom-left" href="#">
        Plus d'informations
      </a>
    </div>
  );
}

export default Batterie;
