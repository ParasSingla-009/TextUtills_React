import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleTiClick = () => {
    console.log("Titlecase was clicked");
    let newText = text.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });;
    setText(newText);
  };
  const clearTextClick = () => {
    console.log("ClearText was clicked");
    let newText = ("");
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Onchange was clicked");
    setText(event.target.value);
  };
  const handleExtraSpaces = (event) => {
    console.log("ExtraSpaces was Clicked");
    setText(text.split(/\s+/).join(" "));

  }

  const wordCount = (text)=>{
    let regex = /\s+\S+/;
    let numOfWords = text.split(regex);
    return numOfWords.length;
  }
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{ backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTiClick}>
        Convert to TitleCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
        Remove ExtraSpaces
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearTextClick}>
        Clear Text
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        {/* <p>{text.split(" ").filter((elememt)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p>{0.08 * text.split(" ").length} Minutes to Read</p> */}
        <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
        <p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Nothing to preview!"}</p>

    </div>
    </>
  );
}
