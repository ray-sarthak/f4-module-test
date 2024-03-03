import React from 'react'
import { useNavigate } from "react-router-dom";


const Error = () => {
  const navigate = useNavigate();
  return (
    <div id="err">
      <h1>Something went Wrong go back to previous page</h1>
      <button id="err-btn" onClick={navigate("/")}>Prev Page</button>
    </div>
  )
}

export default Error;
