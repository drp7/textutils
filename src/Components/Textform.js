import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-3 container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control mb-2"
          id="exampleFormControlTextarea1"
          rows={10}
          value={text}
          onChange={(event) => setText(event.target.value)}
          style={{backgroundColor:props.mode==='light'?'white':'#264653'}}
        />
        <button
          className="btn btn-primary mx-1"
          onClick={() => setText(text.toUpperCase())}
        >
          UpperCase
        </button>
        <button
          className="btn btn-primary  mx-1"
          onClick={() => setText(text.toLowerCase())}
        >
          LowerCase
        </button>
        <button className="btn btn-primary  mx-1" onClick={() => setText("")}>
          Clear
        </button>
      </div>
      <div className="container d-flex">
        <div>
          <h3>Your Text Summary</h3>
          <p>
            {text.split(" ").length}words & {text.length} charcters
          </p>
          <p>
            Times needed for complete the reading
            {0.008 * text.split(" ").length} mins
          </p>
        </div>
        <div>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
