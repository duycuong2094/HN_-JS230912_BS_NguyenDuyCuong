import React from 'react'

function Button(props) {
    const handleClickUperCase = ()=>{
        props.upper(true);
    }
    const handleClickLowerCase = ()=>{
        props.lower(true)
    }
  return (
    <div className='button'>
        <button onClick={handleClickUperCase}>ToUperCase</button>
        <button onClick={handleClickLowerCase}>ToLowerCase</button>
    </div>
  )
}

export default Button