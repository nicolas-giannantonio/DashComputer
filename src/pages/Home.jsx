import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/home.scss";
import Network from "./Network";
function Home() {
  /* CPU */
  const [IS, setIS] = useState([]);
  useEffect(() => {
    let res = api.req_cpu();
    res
      .then((r) => {
        setIS(r);
      })
      .catch((e) => console.log(e));
  }, []);

  /* APPLICATIONS  */
  const [app, setApp] = useState([]);
  const [nameApp, setNameApp] = useState([]);
  const [versionApp, setVersionApp] = useState([]);
  useEffect(() => {
    let res = api.req_app();
    res.then((r) => setApp(r)).catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (app == "error") return;
    app.forEach((apps) => {
      setNameApp((soft) => [
        ...soft,
        String(apps.app).replace("/Applications/", "").replace(".app", ""),
      ]);
      setVersionApp((soft) => [...soft, apps.version]);
    });
  }, [app]);

  /* SOFT VERSIONS */
  const [softVersions, setSoftVersions] = useState([]);

  useEffect(() => {
    let versions = api.req_versions();
    versions.then((r) => setSoftVersions(r)).catch((e) => console.log(e));
  }, []);

  /* Network */
  const [gateway, setGateway] = useState("");
  const [network, setNetwork] = useState([]);
  const [localDevPort, setLocalDevPort] = useState(0);

  useEffect(() => {
    let res = api.req_gateway();
    res.then((r) => setGateway(r)).catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLocalDevPort(0);
      let res = api.req_network();
      res.then((r) => setNetwork(r)).catch((e) => console.log(e));
      network.forEach((net) => {
        if (net.localAddress == "127.0.0.1") {
          // ADD 1 TO LOCAL DEV PORT
          setLocalDevPort((number) => number + 1);
        }
      });
    }, 3000);
  }, [network]);

  /* WIFI */
  const [wifi, setWifi] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      let res = api.req_wifi();
      res.then((r) => setWifi(r)).catch((e) => console.log(e));
    }, 3000);
  }, [wifi]);

  wifi.sort((a, b) => {
    return b.signalLevel - a.signalLevel;
  });

  const distance = (fr, sL) => {
    // FSPL (Free Space Path Loss)
    const frequency = fr / 1000; // GHz
    const signalLevel = sL + 30; // dBm
    const pathLoss =
      27.55 + (20 * Math.log10(frequency) + Math.abs(signalLevel)); // perte signal -> dB
    const distance = Math.pow(10, pathLoss / 80); // m
    return distance;
  };

  /* BATTERIE */

  const [batterie, setBatterie] = useState("");

  useEffect(() => {
    let res = api.req_batterie();
    res.then((r) => setBatterie(r)).catch((e) => console.log(e));
  }, []);

  /* SpeedTest */
  const [speedTest, setSpeedTest] = useState(0);

  useEffect(() => {
    let res = api.req_speedTest();
    res.then((r) => setSpeedTest(r)).catch((e) => console.log(e));
  }, [speedTest]);
  console.log(speedTest);

  return (
    <div className="Home">
      <div className="containers-home">
        <div className="once-container">
          <div className="container-presentation">
            <p className="title-container-presentation">Informations système</p>
            <NavLink to="IS">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11L21.2 2.8M22 6.8V2H17.2M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
          <div className="container-description-home">
            <p className="info-description-home">
              <span>{IS.brand}</span>
              <span className="infoDescription">modèle</span>
            </p>

            <p className="info-description-home">
              <span>{IS.speed}GHz</span>
              <span className="infoDescription">Speed</span>
            </p>

            <p className="info-description-home">
              <span>{IS.physicalCores}</span>
              <span className="infoDescription">coeurs physique</span>
            </p>

            <p className="info-description-home">
              <span>{batterie.percent}%</span>
              <span className="infoDescription">Pourcentage</span>
            </p>
            <p className="info-description-home">
              <span>{batterie.cycleCount}</span>
              <span className="infoDescription">Cycles</span>
            </p>
            <p className="info-description-home">
              <span>{batterie.timeRemaining}min</span>
              <span className="infoDescription">Temps restant</span>
            </p>
          </div>
        </div>

        <div className="once-container languages">
          <div className="container-presentation">
            <p className="title-container-presentation">Languages Versions</p>
            <NavLink to="soft-versions">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11L21.2 2.8M22 6.8V2H17.2M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
          <div className="container-description-home">
            <p className="info-description-home">
              <span>{softVersions.node}</span>
              <span className="infoDescription">node</span>
            </p>
            <p className="info-description-home">
              <span>{softVersions.pip3}</span>
              <span className="infoDescription">pip3</span>
            </p>
            <p className="info-description-home">
              <span>{softVersions.npm}</span>
              <span className="infoDescription">npm</span>
            </p>
            <p className="info-description-home">
              <span>{softVersions.python3}</span>
              <span className="infoDescription">python3</span>
            </p>
          </div>
        </div>

        <div className="once-container languages">
          <div className="container-presentation">
            <p className="title-container-presentation">Software versions</p>
            <NavLink to="soft-versions">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11L21.2 2.8M22 6.8V2H17.2M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
          <div className="container-description-home">
            <p className="info-description-home">
              <span>{versionApp[0]}</span>
              <span className="infoDescription">{nameApp[0]}</span>
            </p>
            <p className="info-description-home">
              <span>{versionApp[1]}</span>
              <span className="infoDescription">{nameApp[1]}</span>
            </p>
            <p className="info-description-home">
              <span>{versionApp[2]}</span>
              <span className="infoDescription">{nameApp[2]}</span>
            </p>
            <p className="info-description-home">
              <span>{versionApp[3]}</span>
              <span className="infoDescription">{nameApp[3]}</span>
            </p>
          </div>
        </div>

        <div className="once-container">
          <div className="container-presentation">
            <p className="title-container-presentation">Network</p>
            <NavLink to="network">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11L21.2 2.8M22 6.8V2H17.2M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
          <div className="container-description-home network-home">
            <p className="info-description-home">
              <span>{gateway}</span>
              <span className="infoDescription">Gateway IP</span>
            </p>
            <p className="info-description-home">
              <span>{network.length !== 0 ? network.length : "..."}</span>
              <span className="infoDescription">Ports ouverts</span>
            </p>
            <p className="info-description-home">
              <span>{localDevPort !== 0 ? localDevPort : "..."}</span>
              <span className="infoDescription">127.0.0.1's ports</span>
            </p>
          </div>
        </div>

        <div className="once-container">
          <div className="container-presentation">
            <p className="title-container-presentation">Wifi</p>
            <NavLink to="wifi">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11L21.2 2.8M22 6.8V2H17.2M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
          <div className="container-description-home network-home">
            <p className="info-description-home">
              <span>{wifi.length !== 0 ? wifi[0].ssid : "..."}</span>
              <span className="infoDescription">Nom du réseau</span>
            </p>
            <p className="info-description-home">
              <span>{wifi.length !== 0 ? wifi[0].quality + "%" : "..."}</span>
              <span className="infoDescription">Qualité</span>
            </p>
            <p className="info-description-home">
              <span>
                {wifi.length !== 0
                  ? "≈" +
                    distance(wifi[0].frequency, wifi[0].signalLevel).toFixed(
                      2
                    ) +
                    "m"
                  : "..."}
              </span>
              <span className="infoDescription">Distance</span>
            </p>
          </div>
        </div>

        <div className="once-container">
          <div className="container-presentation">
            <p className="title-container-presentation">Speed Test</p>
            <NavLink to="monitoring">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 11L21.2 2.8M22 6.8V2H17.2M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
          <div className="container-description-home speedTest">
            <p className="info-description-home">
              <span>{speedTest !== 0 ? speedTest.toFixed(2) : "..."}</span>
              <span className="infoDescription">Mb/s</span>
            </p>
            <p className="info-description-home">
              <span>{speedTest !== 0 ? (speedTest / 8).toFixed(2) : "..."}</span>
              <span className="infoDescription">Mo/s</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
