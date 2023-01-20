import React, { useEffect, useState } from "react";

function Memory() {
  const [memory, SetMemory] = useState("");
  const [size, setSize] = useState({});

  useEffect(() => {
    let res = api.req_memory();
    res.then((r) => SetMemory(r[0])).catch((e) => console.log(e));
  }, []);

  /* !!!!! NON PAS CHANGÉÉ mais c'est OPENFILE */
  useEffect(() => {
    let res = api.req_fsSize();
    res.then((r) => setSize(r[0])).catch((e) => console.log(e));
  }, []);
  console.log(size);
  /*   console.log("data memory : ", memory.device);
   */
  return (
    <div className="container memory">
      <p className="title-container">Disque dur</p>
      <p className="under-up">
        <span className="important-data">{memory.device}</span>
        <span className="subtitle-data">(Device)</span>
      </p>
      <p className="under-up">
        <span className="important-data">{memory.type}</span>
        <span className="subtitle-data">(type)</span>
      </p>
      <p className="under-up">
        <span className="important-data">{memory.name}</span>
        <span className="subtitle-data">(name)</span>
      </p>
      <p className="under-up">
        <span className="important-data">
          {Math.trunc(memory.size / 1000000000)}Go
        </span>
        <span className="subtitle-data">(stokage)</span>
      </p>

      <p className="under-up">
        <span className="important-data">{String((size.Avail)).slice(0, -2)}Go</span>
        <span className="subtitle-data">(libre)</span>
      </p>

      <p className="under-up">
        <span className="important-data">{size.Capacity}</span>
        <span className="subtitle-data">(Capacité)</span>
      </p>

      {/* <p className="under-up">
        <span className="important-data">
          {Math.trunc(memory.free / 100000000)}go
        </span>
        <span className="subtitle-data">(Mémoire pbre)</span>

      </p>
      <p className="under-up">
        <span className="important-data">
          {Math.trunc(memory.active / 1000000000)}go
        </span>
        <span className="subtitle-data">(RAM utilisé)</span>

      </p>
      <p className="under-up">
        <span className="important-data">
          {Math.trunc(memory.buffcache / 100000000)}go
        </span>
        <span className="subtitle-data">(Mémoire buffcache)</span>

      </p>
      <p className="under-up">
        <span className="important-data">
          {Math.trunc(memory.available / 100000000)}go
        </span>
        <span className="subtitle-data">(Mémoire available)</span>

      </p> */}
      <a className="link-bottom-left" href="#">
        Plus d'informations
      </a>
    </div>
  );
}

export default Memory;
