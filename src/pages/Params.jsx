import React, { useEffect, useState } from "react";

function Params() {
  const [token, setToken] = useState("");
  const [sendData, setSendData] = useState(false);
  useEffect(() => {
    if (sendData && token.length > 0) api.send("3000", token);
  }, [sendData]);

  return (
    <div className="container network">
      <div className="form-token-params">
        <p>
          Aller sur le site <a href="https://fast.com/">fast.com</a> Ouvrez les
          outils de développement de votre navigateur, allez dans l'onglet 
          <b> Réseau</b> et copiez le token sur l'URL de la requête qui ressemble à
          <br />
          <b>
            https://api.fast.com/netflix/speedtest?https=true&token=
            <u>the-token</u>&urlCount=5
          </b>
        </p>
        <input
          onChange={(e) => setToken(e.target.value)}
          type="text"
          placeholder="token"
        />
        <button
          onClick={() => setSendData(!sendData)}
          className="launch tokenbtn"
        >
          Validé
        </button>
      </div>
    </div>
  );
}

export default Params;
