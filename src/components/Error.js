import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
    //console.log(err);
  return (
    <div>
        <h1>Ooops Something went wrong</h1>
        <h2>Error Status : {err.status},  message: {err.statusText}</h2>
     </div>
  )
}

export default Error