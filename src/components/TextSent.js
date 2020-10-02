import React from "react"
import {Link } from 'react-router-dom'

const TextSent = () => {
  return (
    <div style={{textAlign:"center"}}>
    <h1>This is to confirm that your text message has been sent to <strong>{localStorage.getItem("hiredCleaner")}</strong>!</h1>
    <br/>
    <h1>Thank You! For Using Cleaneast!</h1>
    <br/>
    <div style={{marginTop: "5%"}}>
        <h2>Please Click <strong> <Link to={'/'}> here </Link> </strong> To Continue To The Home Page ....</h2>
    </div>

    </div>
  )
}

export default TextSent