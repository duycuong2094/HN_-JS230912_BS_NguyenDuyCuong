import React, { useEffect, useState } from "react";
import CountCharacters from "./CountCharacters";
import Button from "./Button";

function Hackcathon() {
    const [text,setText] =useState("");
    const[uperCase,setUperCase]=useState(false);
    const[lower,setLower]=useState(false);
    const changeText=(e)=>{
        setText(e.target.value)
    }
    const handleUpper=(value)=>{
            setUperCase(value);
            setLower(!value)
    }
    const handleLower = (value)=>{
        setLower(value);
        setUperCase(!value)
    }
   useEffect(()=>{
    if(uperCase==true){
        let newText=text.toLocaleUpperCase()
        setText(newText)
    }
   },[uperCase])
   useEffect(()=>{
    if(lower==true){
        let newTextLower=text.toLowerCase()
        setText(newTextLower)
    }
   },[lower])
  return (
    <div>
        <h1>Word Counter</h1>
      <CountCharacters text={text}/>
      <textarea onChange={changeText} value={text} ></textarea>
      <Button upper={handleUpper} lower={handleLower}/>
    </div>
  );
}

export default Hackcathon;
