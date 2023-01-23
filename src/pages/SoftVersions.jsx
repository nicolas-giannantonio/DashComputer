import React, { useEffect, useState } from "react";

function SoftVersions() {
  const [docs, setDocs] = useState([]);
  const [versions, setVersions] = useState({});

  const [app, setApp] = useState([]);

  useEffect(() => {
    let res = api.req_Files();
    res.then((r) => setDocs(r)).catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    let versions = api.req_versions();
    versions.then((r) => setVersions(r)).catch((e) => console.log(e));
  }, []);

  // Afficher les versions des logiciels
  const [allLanguages, SetAllLanguages] = useState([]);
  useEffect(() => {
    for (let i in versions) {
      if (versions[i] !== "") {
        SetAllLanguages((soft) => [...soft, { nom: i, version: versions[i] }]);
      }
    }
  }, [versions]);

  allLanguages.map((soft, key) => console.log(soft.name, soft.version, key));

  useEffect(() => {
    let res = api.req_app();
    res.then((r) => setApp(r)).catch((e) => console.log(e));
  }, []);

  const [ensemble, setEnsemble] = useState([]);
  useEffect(() => {
    if (app == "error") return;
    app.forEach((apps) => {
      setEnsemble((soft) => [...soft, apps]);
    });
  }, [app]);

  return (
    <div className="SoftVersions">
      <table className="table-network">
        <thead>
          <tr>
            <th>Langages</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {allLanguages.length !== 0 ? (
            allLanguages.map((soft, key) => (
              <tr key={key}>
                <td>{soft.nom}</td>

                <td>{soft.version}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>chargement...</td>
              <td>chargement...</td>
            </tr>
          )}
        </tbody>
      </table>

      <table className="table-network">
        <thead>
          <tr>
            <th>Application</th>
            <th>Version </th>
          </tr>
        </thead>
        <tbody>
          {ensemble.length !== 0 ? (
            ensemble.map((soft, key) => (
              <tr key={key}>
                <td>{soft.app.replace("/Applications/", "")}</td>

                <td>{soft.version}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>chargement...</td>
              <td>chargement...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SoftVersions;
