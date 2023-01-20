import React, { useEffect, useState } from "react";

function Wifi() {
  const [wifi, setWifi] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      let res = api.req_wifi();
      res.then((r) => setWifi(r)).catch((e) => console.log(e));
    }, 3000);
  }, [wifi]);

  const distance = (fr, sL) => {
    // FSPL (Free Space Path Loss)
    const frequency = fr / 1000; // GHz
    const signalLevel = sL + 30; // dBm
    const pathLoss =
      27.55 + (20 * Math.log10(frequency) + Math.abs(signalLevel)); // perte signal -> dB
    const distance = Math.pow(10, pathLoss / 80); // m
    return distance;
  };

  wifi.sort((a, b) => {
    return b.signalLevel - a.signalLevel;
  });
  return (
    <div className="container wifi">
      <p className="title-container">
        Total : {wifi.length !== 0 ? wifi.length : "..."}
      </p>

      <table className="table-network">
        <thead>
          <tr>
            <th>SSID</th>
            <th>bssid (MAC)</th>
            <th>fréquence</th>
            <th>Channel</th>
            <th>Securité</th>
            <th>signalLevel</th>
            <th>Qualité</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {wifi.length !== 0 ? (
            wifi.map((w, key) => (
              <tr key={key}>
                <td style={{ fontWeight: "600" }}>{w.ssid}</td>
                <td>{w.bssid}</td>
                {/* -70 */}
                <td>{w.frequency}MHz</td>
                <td>{w.channel}</td>
                <td>{w.security}</td>
                <td
                  style={
                    w.signalLevel + 30 <= -60
                      ? { color: "red" }
                      : w.signalLevel + 30 < -35 && w.signalLevel + 30 > -60
                      ? { color: "orange" }
                      : { color: "green" }
                  }
                >
                  {w.signalLevel + 30}dBm
                </td>

                <td>{w.quality}%</td>
                <td>≈{distance(w.frequency, w.signalLevel).toFixed(2)}m</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>chargement...</td>
              <td>chargement...</td>
              <td>chargement...</td>
              <td>chargement...</td>
              <td>chargement...</td>
              <td>chargement...</td>
              <td>chargement...</td>
              <td>chargement...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Wifi;
