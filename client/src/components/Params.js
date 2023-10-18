import React from 'react'
import { useParams } from 'react-router-dom'

function Params() {

    const params=useParams();
    console.log("Params is ",params);
  return (
    <div>
        
        <h2>Paramaters Page</h2>

    </div>
  )
}

export default Params