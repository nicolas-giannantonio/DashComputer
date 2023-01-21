import React, { useEffect, useState } from "react";

function SoftVersions() {
  const [docs, setDocs] = useState([]);
  const [versions, setVersions] = useState({});

  const [nameSoft, setNameSoft] = useState([]);
  const [numberSoft, setNumberSoft] = useState([]);

  const [app, setApp] = useState([]);
  const [nameApp, setNameApp] = useState([]);
  const [versionApp, setVersionApp] = useState([]);

  const [size, setSize] = useState([]);

  useEffect(() => {
    let res = api.req_Files();
    res.then((r) => setDocs(r)).catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    let versions = api.req_versions();
    versions.then((r) => setVersions(r)).catch((e) => console.log(e));
  }, []);

  // Afficher les versions des logiciels
  useEffect(() => {
    for (let i in versions) {
      if (versions[i] !== "") {
        setNameSoft((soft) => [...soft, i]);
        setNumberSoft((soft) => [...soft, versions[i]]);
      }
    }
  }, [versions]);

  /* useEffect(() => {
    api.send("3000", "php")
  }, []) */

  useEffect(() => {
    let res = api.req_app();
    res.then((r) => setApp(r)).catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (app == "error") return;
    app.forEach((apps) => {
      setNameApp((soft) => [
        ...soft,
        String(apps.app).replace("/Applications/", ""),
      ]);
      setVersionApp((soft) => [...soft, apps.version]);
    });
  }, [app]);

  return (
    <div className="SoftVersions">
      <div className="container soft">
        <p className="title-container">languages Versions</p>
        {/* <input type="text" placeholder="Search software" />
      {docs.map((doc, key) => (
        <ul>
          <li id={key}>{doc}</li>
        </ul>
      ))} */}
        <div className="container-soft">
          <div className="container-softname">
            <ul>
              {nameSoft.map((soft, key) => (
                <li key={key}>{soft}</li>
              ))}
            </ul>
          </div>
          <div className="container-softversions">
            <ul>
              {numberSoft.map((soft, key) => (
                <li key={key}>{soft}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container soft logiciels">
        <p className="title-container">logiciels Versions</p>
        <div className="container-soft">
          <div className="container-softname">
            <ul>
              {nameApp.map((soft, key) => (
                <li key={key}>{soft}</li>
              ))}
            </ul>
          </div>
          <div className="container-softversions">
            <ul>
              {versionApp.map((soft, key) => (
                <li key={key}>{soft}</li>
              ))}
            </ul>
          </div>
          <div className="container-softversions">
            <ul>
              {size.map((soft, key) => (
                <li key={key}>{soft}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftVersions;
