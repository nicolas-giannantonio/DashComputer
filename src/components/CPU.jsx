import React, { useEffect, useState } from "react";

function CPU() {
  const [cpu, setCpu] = useState("");
  const [l1d, setl1d] = useState()


  // Async func to get data from main.js

  useEffect(() => {
    let res = api.req_cpu();
    res
      .then((r) => {
        setCpu(r);
/*         console.log("cache : ", r.cache.l1d);
 */        setl1d(r.cache.l1d / 1000000);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container cpu">
      <p className="title-container">Processeur</p>

      <div className="container-row">
        <div className="container-column">
          <p className="under-up">
            <span className="important-data">{cpu.manufacturer}</span>
            <span className="subtitle-data">(Marque du processeur)</span>
          </p>
          <p className="under-up">
            <span className="important-data">{cpu.brand}</span>
            <span className="subtitle-data">(Modèle du processeur)</span>
          </p>

          <p className="under-up">
            <span className="important-data">{cpu.speed + "GHz"}</span>
            <span className="subtitle-data">(Fréquence)</span>
          </p>
          <p className="under-up">
            <span className="important-data">
              {cpu.speedMin + "GHz" + " / " + cpu.speedMax + "GHz"}
            </span>
            <span className="subtitle-data">(Fréquence min/max)</span>
          </p>
          <p className="under-up">
            <span className="important-data">{cpu.socket}</span>
            <span className="subtitle-data">(socket)</span>
          </p>
          <p className="under-up">
            <span className="important-data">{l1d}Mo</span>
            <span className="subtitle-data">(cache)</span>
          </p>
        </div>
        <div className="container-column">
          <p className="under-up">
            <span className="important-data">{cpu.cores}</span>
            <span className="subtitle-data">(Nombre de coeurs)</span>
          </p>
          <p className="under-up">
            <span className="important-data">{cpu.physicalCores}</span>
            <span className="subtitle-data">(Coeurs physiques)</span>
          </p>
          <p className="under-up">
            <span className="important-data">{cpu.performanceCores}</span>
            <span className="subtitle-data">(Coeurs de performances)</span>
          </p>
          <p className="under-up">
            <span className="important-data">{cpu.efficiencyCores}</span>
            <span className="subtitle-data">(Coeurs efficients)</span>
          </p>
          <p className="under-up">
            <span className="important-data">{cpu.processors}</span>
            <span className="subtitle-data">(Processorss)</span>
          </p>
        </div>
      </div>
      <a className="link-bottom-left" href="#">
        Plus d'informations
      </a>
    </div>
  );
}

export default CPU;
