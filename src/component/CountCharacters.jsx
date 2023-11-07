import React, { useState } from 'react'

function CountCharacters(props) {
    
    let word = props.text.trim();
    let newlineCount = 0; 
    let space=word.split(" ").length-1;
    let coutWord=word.length-space;
    let arr=0
    if(word==""){
        arr=0
        newlineCount=0
    }else{
        arr = word.split(" ").filter((item) => item !== "").length;
       
        newlineCount=(word.match(/\n/g) || []).length+1
    }
    

    console.log(arr);
  return (
    <div className='characters'>
        <div className='cssBox'>
            <div >Word</div>
            <div>{coutWord}</div>
        </div>
        <div className='cssBox'>
            <div>Letter</div>
            <div>{arr}</div>
        </div>
        <div className='cssBox'>
            <div>Paragraph</div>
            <div>{newlineCount}</div>
        </div>
    </div>
  )
}

export default CountCharacters