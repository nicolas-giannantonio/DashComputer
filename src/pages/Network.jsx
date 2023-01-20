import React, { useEffect, useState } from "react";

function Network() {
  const [network, setNetwork] = useState([]);
  const [gateway, setGateway] = useState("");
  const [ports, setPorts] = useState([]);
  const [localAddress, setLocalAddress] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      let res = api.req_network();
      res.then((r) => setNetwork(r)).catch((e) => console.log(e));
    }, 3000);
  }, [network]);

  useEffect(() => {
    let res = api.req_gateway();
    res.then((r) => setGateway(r)).catch((e) => console.log(e));
  }, []);

  /* useEffect(() => {
    network.forEach((port) => {
        if (port.localPort !== "*" && port.localAddress !== "*") {
          setPorts((ports) => [...ports, port.localPort]);
          setLocalAddress((ports) => [...ports, port.localAddress]);
        }
      });
  }, [network]) */

  
  return (
    <>
      <div className="containers">
        <p className="title-container">
          Network gateway :{" "}
          {gateway !== undefined || null
            ? gateway
            : "Impossible de trouvé votre adresse"}
        </p>
        <p className="subtitle-container">
          {" "}
          {network.length == 0
            ? "Chargement du nombre de ports"
            : network.length + " ports trouvés"}
        </p>
        <div className="container network">
          <table className="table-network">
            <thead>
              <tr>
                <th>Local Address</th>
                <th>Ports</th>
                <th>Protocol</th>
                <th>Process</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {network.length !== 0 ? (
                network.map((port, key) =>
                  port.localPort !== "*" ||
                  port.localAddress !== "*" ||
                  port.process !== "" ? (
                    <tr key={key}>
                      <td>{port.localAddress}</td>
                      <td>
                        {port.localPort}
                        <span className="details">
                          {port.localPort < 1023
                            ? "http/ftp/ssh"
                            : port.localPort > 1023 && port.localPort < 49151
                            ? "msg/web"
                            : port.localPort > 49151
                            ? "tcp/udp"
                            : null}
                        </span>
                      </td>
                      <td>{port.protocol}</td>
                      <td>{port.process}</td>
                      <td
                        style={
                          port.state == "ESTABLISHED"
                            ? { color: "green" }
                            : port.state == "LISTEN"
                            ? { color: "orange" }
                            : { color: "red" }
                        }
                      >
                        {port.state}
                      </td>
                    </tr>
                  ) : null
                )
              ) : (
                <tr>
                  <td>Chargement...</td>
                  <td>Chargement...</td>
                  <td>Chargement...</td>
                  <td>Chargement...</td>
                  <td>Chargement...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Network;
