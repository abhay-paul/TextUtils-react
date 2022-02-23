import { useState } from "react";
import React from "react";

export default function FormText(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };
  const handleCopyClick = () => {
    const copyText= document.getElementById("formTextArea");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    
  };
  const handleExtraSpaces = () => {
    
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <div>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder={`Enter Some Text`}
            id="formTextArea"
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'#576e85':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          onClick={handleUpClick}
          id="button1"
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary"
          onClick={handleDownClick}
          id="button2"
        >
          Convert to Lowecase
        </button>
        <button
          className="btn btn-primary"
          onClick={handleClearClick}
          id="button3"
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary"
          onClick={handleCopyClick}
          id="button4"
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleExtraSpaces}
          id="button5"
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length-1} words and {text.length} Character
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in textarea to preview"}</p>
      </div>
    </>
  );
}
