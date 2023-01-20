import React, { useEffect, useState } from "react";

function Graphics() {
  const [graphics, setGraphics] = useState("");

  useEffect(() => {
    let res = api.req_graphics();
    res.then((r) => setGraphics(r)).catch((e) => console.log(e));
  }, []);

/*   console.log("data graphics : ", graphics.controllers);
 */
  return (
    <div>
      <h1>Graphics</h1>
      <ul>
        <li>Device name : </li>
      </ul>
    </div>
  );
}

export default Graphics;
